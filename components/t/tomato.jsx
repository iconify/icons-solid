import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.apvwnjbfe {
  d: path("M8.5 5L12 7l3.5-2M12 7V3.5");
}

.d-irzut0c {
  d: path("M12 7c-5-1.5-8.5 1.5-8 6s4 7.5 8 7.5s7.5-3 8-7.5s-3-7.5-8-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d-irzut0c"/><path class="apvwnjbfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:tomato"} {...others} />);
}

export default Component;
