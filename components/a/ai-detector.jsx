import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bbz87bbtw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.5V5.25a2.5 2.5 0 0 1 2.5-2.5H7.5m9 0h2.25a2.5 2.5 0 0 1 2.5 2.5V7.5m0 9v2.25a2.5 2.5 0 0 1-2.5 2.5H16.5m-9 0H5.25a2.5 2.5 0 0 1-2.5-2.5V16.5M4.5 12h1.25m12.5 0h1.25M12 8.25q.45 3.3 3.75 3.75q-3.3.45-3.75 3.75q-.45-3.3-3.75-3.75q3.3-.45 3.75-3.75");
}
</style><path class="bbz87bbtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ai-detector"} {...others} />);
}

export default Component;
