import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e_u2cdckg {
  d: path("M10 8V3h4v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kzllfo7oa {
  d: path("M10 16v5h4v-5");
}

.mxzk029nb {
  d: path("M12 10v4");
}

.vdjbxw5wp {
  d: path("M7 10a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="vdjbxw5wp"/><path class="e_u2cdckg"/><path class="kzllfo7oa"/><path class="mxzk029nb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:fitness-tracker-outline-thin"} {...others} />);
}

export default Component;
