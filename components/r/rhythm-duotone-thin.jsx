import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i_61jzbqt {
  d: path("M4 8v8");
}

.i4kf51esh {
  d: path("M19 5v14");
}

.jddyw-bds {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lr7f98b6y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 8v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.paqk66b1g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 8v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.st-dlsdww {
  d: path("M14 8v8");
}

.tah1g6hxh {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zto18nxmz {
  d: path("M9 5v14");
}
</style><g class="hntgybcog"><path class="lr7f98b6y"/><path class="tah1g6hxh"/><path class="paqk66b1g"/><path class="jddyw-bds"/><path class="i_61jzbqt"/><path class="zto18nxmz"/><path class="st-dlsdww"/><path class="i4kf51esh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:rhythm-duotone-thin"} {...others} />);
}

export default Component;
