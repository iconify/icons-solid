import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a2_-gd0qi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 2.5h7v19h-7Zm3.5 0v19M2.5 7Q4.25 5.5 6 7t3.5 0m-7 5q1.75-1.5 3.5 0t3.5 0m-7 5q1.75-1.5 3.5 0t3.5 0");
}
</style><path class="a2_-gd0qi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:insulation-thermal"} {...others} />);
}

export default Component;
