import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i2r69kxgu {
  d: path("M21.25 10.25a9.5 9.5 0 1 0 0 3.5");
}

.t0uti_2sg {
  d: path("M5.75 13.75a6.5 6.5 0 1 0 0-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydw1ymv3x {
  d: path("M15 10.5a3.5 3.5 0 1 0 0 3m-3 5v3m0-16v3");
}
</style><g class="ulnmmdpxh"><path class="i2r69kxgu"/><path class="t0uti_2sg"/><path class="ydw1ymv3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:garden-maze"} {...others} />);
}

export default Component;
