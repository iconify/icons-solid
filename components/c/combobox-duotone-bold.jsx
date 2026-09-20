import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fx8yhjh_u {
  d: path("M4 15h15");
}

.myzclp8ci {
  d: path("M3 5a2 2 0 0 1 2 -2h15a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.n4m8vbali {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h15a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r_r678bum {
  d: path("M6 7h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wfw5phgmx {
  d: path("m15 6 2 2 2 -2");
}

.zceg_0atr {
  d: path("M4 20h15");
}
</style><g class="s0phu2bbs"><path class="n4m8vbali"/><path class="myzclp8ci"/><path class="r_r678bum"/><path class="wfw5phgmx"/><path class="fx8yhjh_u"/><path class="zceg_0atr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:combobox-duotone-bold"} {...others} />);
}

export default Component;
