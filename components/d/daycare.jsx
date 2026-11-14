import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aa7hez57j {
  d: path("m3 15l9-5.5l9 5.5v6.5H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xad9vab2f {
  d: path("M10 21.5v-4a2 2 0 0 1 4 0v4M8 9.75a4 4 0 1 1 8 0m-4-6V2M8 5.5L6.5 4M16 5.5L17.5 4");
}
</style><g class="ulnmmdpxh"><path class="aa7hez57j"/><path class="xad9vab2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:daycare"} {...others} />);
}

export default Component;
