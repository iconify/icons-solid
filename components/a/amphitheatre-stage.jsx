import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b_uynac9f {
  d: path("M5 13.5a7 5.5 0 0 1 14 0");
}

.ejqpu233w {
  d: path("M2.5 13.5a9.5 8.5 0 0 1 19 0m-15 2.75h11v3h-11Z");
}

.m47-sobua {
  d: path("M7.75 13.5a4.25 2.75 0 0 1 8.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m47-sobua"/><path class="b_uynac9f"/><path class="ejqpu233w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:amphitheatre-stage"} {...others} />);
}

export default Component;
