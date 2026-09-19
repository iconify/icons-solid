import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gdpz_rbbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.532 9.567h24.936a4 4 0 0 1 4 4V38.5a4 4 0 0 1-4 4H11.532a4 4 0 0 1-4-4V13.567a4 4 0 0 1 4-4M13.715 5.5v4.068M34.14 5.5v4.068M9.731 19.89h28.36");
}

.vr90ovlei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.238 27.135l2.8-1.54m0 0v11.2m4.289-.945c.773.648 1.608.945 3.483.945h.437a2.8 2.8 0 0 0 2.799-2.8v0a2.8 2.8 0 0 0-2.8-2.798m-3.92-4.667c.775-.645 1.61-.94 3.485-.935l.436.003a2.8 2.8 0 0 1 2.799 2.8v0a2.8 2.8 0 0 1-2.8 2.799m-2.151 0h2.152");
}
</style><path class="vr90ovlei"/><path class="gdpz_rbbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:calendar-fossify-13"} {...others} />);
}

export default Component;
