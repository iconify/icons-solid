import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.asicp58sr {
  d: path("M15.625 5.721A7.25 7.25 0 0 1 12 19.25");
}

.hiqpz_0an {
  d: path("M9.75 2.5L12 4.75L9.75 7M8 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.peitiepcq {
  d: path("M14.25 17L12 19.25l2.25 2.25m-5.875-3.221A7.25 7.25 0 0 1 12 4.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6cjenbyp {
  d: path("M11 9h2a3 3 0 0 1 0 6h-2");
}
</style><g class="ulnmmdpxh"><path class="asicp58sr"/><path class="peitiepcq"/><path class="hiqpz_0an"/><path class="v6cjenbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:circular-economy"} {...others} />);
}

export default Component;
