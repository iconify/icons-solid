import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w9cbrwb7w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 18.75V8.55l.78-.62l5.69-4.55l.78-.63l.78.63l5.69 4.55l.78.62v1.7a7 7 0 0 0-7 7v2.5h-7.5zm17.75-1.5a3.25 3.25 0 0 1-5.7 2.13m-.8-2.13a3.25 3.25 0 0 1 5.7-2.13m-4.95 6.13V19.4h1.85m3.15-6.15v1.85H17.9");
}
</style><path class="w9cbrwb7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:house-rent-sharp"} {...others} />);
}

export default Component;
