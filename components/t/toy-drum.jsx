import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ivfdabg1j {
  d: path("M4.5 10a7.5 2.5 0 1 0 15 0a7.5 2.5 0 1 0-15 0Z");
}

.kfk2zn8hp {
  d: path("M4.5 10v7a7.5 2.5 0 0 0 15 0v-7M8 7.75l8.5-5.25M16 7.75L7.5 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ivfdabg1j"/><path class="kfk2zn8hp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:toy-drum"} {...others} />);
}

export default Component;
