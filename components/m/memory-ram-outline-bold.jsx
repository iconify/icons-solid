import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmlaifbpn {
  d: path("M12 16v4");
}

.l5z6qsb5o {
  d: path("M7 16v4");
}

.mmtudb-4h {
  d: path("M17 16v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x2d2kybwe {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="x2d2kybwe"/><path class="l5z6qsb5o"/><path class="fmlaifbpn"/><path class="mmtudb-4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:memory-ram-outline-bold"} {...others} />);
}

export default Component;
