import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lkzenacir {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 12q0-2.75 2.75-2.75T7.75 12T5 14.75T2.25 12M12 9.25q-2.75 0-2.75 2.75T12 14.75T14.75 12T12 9.25M16.25 12q0-2.75 2.75-2.75T21.75 12T19 14.75T16.25 12");
}
</style><path class="lkzenacir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:dots-three"} {...others} />);
}

export default Component;
