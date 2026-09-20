import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-pcdbceg {
  d: path("M4 14a4 4 0 0 1 2 -7.5A5 5 0 0 1 15.5 5a5.5 5.5 0 0 1 4.5 9Z");
}

.kafgvtbap {
  d: path("M7 15.5v5m-2.5 0 5 -5");
}

.peew4rbrn {
  d: path("M17 15.5v5m-2.5 0 5 -5");
}

.r7ao24n4h {
  d: path("M4 22h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="c-pcdbceg"/><path class="kafgvtbap"/><path class="peew4rbrn"/><path class="r7ao24n4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:heavy-snow-outline-bold"} {...others} />);
}

export default Component;
