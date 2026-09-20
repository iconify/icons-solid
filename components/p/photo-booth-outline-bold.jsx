import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.guo-qbwvt {
  d: path("M8 3v13c0 2 4 2 4 0V3");
}

.q686vz2zk {
  d: path("M14 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uk66x15py {
  d: path("M4 3v18h16V3Z");
}
</style><g class="s0phu2bbs"><path class="uk66x15py"/><path class="guo-qbwvt"/><path class="q686vz2zk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:photo-booth-outline-bold"} {...others} />);
}

export default Component;
