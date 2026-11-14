import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ej2ootb4p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.25c1.5-6 3.5-6 4.75 0s3.25 6 4.75 0s3.5-6 4.75 0s3.25 6 4.75 0M3 18.25h18M18.75 16L21 18.25l-2.25 2.25");
}
</style><path class="ej2ootb4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sound-wave"} {...others} />);
}

export default Component;
