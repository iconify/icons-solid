import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hm7p5qg5t {
  d: path("M12 18.5S7.5 14 7.5 11c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 3-4.5 7.5-4.5 7.5Zm0-9.25v3.5M10.25 11h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.unqp5kb9j {
  d: path("M7.952 18.199L3 20V6l5.5-2l.815.233m7.47 1.3L21 4v14l-5.5 2l-.83-.237M8.5 4v.6m7 14.2V20");
}
</style><g class="ulnmmdpxh"><path class="unqp5kb9j"/><path class="hm7p5qg5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hospital-map"} {...others} />);
}

export default Component;
