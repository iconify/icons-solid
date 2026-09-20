import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fh4vasbnq {
  d: path("M8 12a4 4 0 0 1 8 0");
}

.prbp3oa5j {
  d: path("M19 15h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.us2evabuy {
  d: path("M12 5.5V8");
}

.wzsyjh0wp {
  d: path("M2 15h3");
}

.yipk7w_dp {
  d: path("M5 12v7h14v-7Z");
}
</style><g class="s0phu2bbs"><path class="yipk7w_dp"/><path class="fh4vasbnq"/><path class="us2evabuy"/><path class="wzsyjh0wp"/><path class="prbp3oa5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:pot-outline-bold"} {...others} />);
}

export default Component;
