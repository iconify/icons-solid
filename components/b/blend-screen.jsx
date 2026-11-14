import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ah3yi8onm {
  d: path("M11.25 13.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.hvrmw7b7m {
  d: path("M6.75 13.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.nct7lub7f {
  d: path("M9 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="nct7lub7f"/><path class="hvrmw7b7m"/><path class="ah3yi8onm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:blend-screen"} {...others} />);
}

export default Component;
