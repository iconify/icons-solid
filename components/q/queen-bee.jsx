import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uoo_qqbjc {
  d: path("M9 7.5V3l1.5 1.5l1.5-2l1.5 2L15 3v4.5Z");
}

.voy3v4bmi {
  d: path("M3 10.5a3 2 0 1 0 6 0a3 2 0 1 0-6 0Zm12 0a3 2 0 1 0 6 0a3 2 0 1 0-6 0ZM7.5 14h9M8 17.5h8");
}

.wou4_nv-z {
  d: path("M7.5 14.5a4.5 7 0 1 0 9 0a4.5 7 0 1 0-9 0Z");
}
</style><g class="ulnmmdpxh"><path class="uoo_qqbjc"/><path class="wou4_nv-z"/><path class="voy3v4bmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:queen-bee"} {...others} />);
}

export default Component;
