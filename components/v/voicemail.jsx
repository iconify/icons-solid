import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.na7mf3b2e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2 12q0-1.864 1.318-3.182T6.5 7.5t3.182 1.318T11 12q0 1.737-1.145 3h4.29Q13 13.737 13 12q0-1.864 1.318-3.182T17.5 7.5t3.182 1.318T22 12t-1.318 3.182T17.5 16.5h-11q-1.864 0-3.182-1.318T2 12");
}
</style><path class="na7mf3b2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:voicemail"} {...others} />);
}

export default Component;
