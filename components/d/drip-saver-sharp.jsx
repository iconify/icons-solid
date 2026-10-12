import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e4ykyh2nl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.25h13.5V12M9 7.25v-3.5m-2.25 0h4.5m5 10.75c1.4 1.8 2.25 3 2.25 4.1a2.25 2.25 0 0 1-4.5 0c0-1.1.85-2.3 2.25-4.1Zm-13.5-3.25h6");
}
</style><path class="e4ykyh2nl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:drip-saver-sharp"} {...others} />);
}

export default Component;
