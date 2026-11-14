import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k2mootbun {
  d: path("M12 2.5v2m-6 5v-5h12v5");
}

.tp6p58b4s {
  d: path("M8.75 7.25h6.5v4h-6.5Zm1 4L5 18m9.25-6.75L19 18M4.5 19a7.5 2.5 0 1 0 15 0a7.5 2.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k2mootbun"/><path class="tp6p58b4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:spotlight-cone"} {...others} />);
}

export default Component;
