import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eaabexbql {
  d: path("M3 6v13");
}

.erfjsdmyp {
  d: path("M13.5 15a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.jwgl0nbvm {
  d: path("M3.5 15a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.o178hubwo {
  d: path("m7 15 3 -3h4l3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wcu0lhc9k {
  d: path("M10 8v4");
}
</style><g class="s0phu2bbs"><path class="jwgl0nbvm"/><path class="erfjsdmyp"/><path class="o178hubwo"/><path class="wcu0lhc9k"/><path class="eaabexbql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:bike-share-outline-bold"} {...others} />);
}

export default Component;
