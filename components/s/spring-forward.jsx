import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n-5ydibjr {
  d: path("m16 7l3 .75l-.25-3.25");
}

.n14xp8b8h {
  d: path("M7 13.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xrfa8fz1m {
  d: path("M12 11v2.5h2");
}

.y1i9lh0ey {
  d: path("M5.75 19.75A9 9 0 0 1 19 7.75");
}
</style><g class="ulnmmdpxh"><path class="n14xp8b8h"/><path class="xrfa8fz1m"/><path class="y1i9lh0ey"/><path class="n-5ydibjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:spring-forward"} {...others} />);
}

export default Component;
