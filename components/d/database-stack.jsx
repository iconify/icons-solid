import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ca6f1gs_r {
  d: path("M8 9.25c0 1.15 2.7 2.25 6.25 2.25s6.25-1.1 6.25-2.25M8 14.5c0 1.1 2.7 2.25 6.25 2.25s6.25-1.15 6.25-2.25");
}

.f0ye-eo3i {
  d: path("M4.75 16c-.85-.4-1.25-.9-1.25-1.5V5c0-1.4 2.9-2.5 6.5-2.5c2.6 0 4.8.6 5.75 1.5");
}

.obslszbmk {
  d: path("M8 9.25C8 8.1 10.7 7 14.25 7s6.25 1.1 6.25 2.25v10c0 1.15-2.7 2.25-6.25 2.25S8 20.4 8 19.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="obslszbmk"/><path class="ca6f1gs_r"/><path class="f0ye-eo3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:database-stack"} {...others} />);
}

export default Component;
