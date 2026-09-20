import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.do823-b2j {
  fill: currentColor;
  d: path("M12 17.75a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m4.996 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-9.992 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m4.996-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m4.996 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-9.992 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m4.996-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m4.996 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-9.992 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3");
}
</style><path class="do823-b2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dialpad-24-filled"} {...others} />);
}

export default Component;
