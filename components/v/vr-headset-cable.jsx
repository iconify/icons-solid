import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tlovb3b5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14A2.5 2.5 0 0 1 21.5 5v3.5A2.5 2.5 0 0 1 19 11h-4.25a2.75 2.75 0 0 0-5.5 0H5a2.5 2.5 0 0 1-2.5-2.5V5A2.5 2.5 0 0 1 5 2.5ZM18 11c3 1.75-3 3.75 0 5.5m-2.25 0h4.75v3h-4.75Zm1 3v2m2.75-2v2");
}
</style><path class="tlovb3b5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:vr-headset-cable"} {...others} />);
}

export default Component;
