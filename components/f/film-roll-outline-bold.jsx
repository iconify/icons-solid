import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.it88l1wbh {
  d: path("M7 7v10");
}

.mmx7g9jzy {
  d: path("M3 7v10h18V7Z");
}

.qg37n0byb {
  d: path("M17 7v10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w_jkatblo {
  d: path("M12 7v10");
}
</style><g class="s0phu2bbs"><path class="mmx7g9jzy"/><path class="it88l1wbh"/><path class="w_jkatblo"/><path class="qg37n0byb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:film-roll-outline-bold"} {...others} />);
}

export default Component;
