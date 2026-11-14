import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bjnscebzj {
  d: path("M8.75 10h1.5l1-1.75l1.5 3.5l1-1.75h1.5");
}

.bszeg541x {
  d: path("M7.25 5.75h9.5v8h-9.5Z");
}

.m6kvr71pk {
  d: path("M2.5 3h19v13.5h-19ZM12 16.5V20m-4 .5h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m6kvr71pk"/><path class="bszeg541x"/><path class="bjnscebzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:electronic-health-record"} {...others} />);
}

export default Component;
