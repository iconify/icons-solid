import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ktvep6pgg {
  d: path("M4 10v9a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 20 19v-9");
}

.rp4oqibyb {
  d: path("M10.25 10.25L13 13l2.75-2.75M8.5 17.5h8");
}

.tufj21bif {
  d: path("M3 4.5h6a4 4 0 0 1 4 4V13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ktvep6pgg"/><path class="tufj21bif"/><path class="rp4oqibyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:request-body"} {...others} />);
}

export default Component;
