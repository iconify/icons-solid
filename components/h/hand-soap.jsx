import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gt-4b2bmi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 10.5H20v11H9.5Zm3-3h5v3h-5Zm2.5 0v-4H4.5V5m0 3s-1.75 2.5-1.75 3.75a1.75 1.75 0 0 0 3.5 0C6.25 10.5 4.5 8 4.5 8Z");
}
</style><path class="gt-4b2bmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hand-soap"} {...others} />);
}

export default Component;
