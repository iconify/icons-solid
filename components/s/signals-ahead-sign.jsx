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

.ijkosm9dz {
  d: path("M12 6.25za2.25 2.25 0 0 1 2.25 2.25v7A2.25 2.25 0 0 1 12 17.75a2.25 2.25 0 0 1-2.25-2.25v-7A2.25 2.25 0 0 1 12 6.25M12 9h.01M12 12h.01M12 15h.01");
}

.tpnyvdgai {
  d: path("m14.475 4.475l5.05 5.05a3.5 3.5 0 0 1 0 4.95l-5.05 5.05a3.5 3.5 0 0 1-4.95 0l-5.05-5.05a3.5 3.5 0 0 1 0-4.95l5.05-5.05a3.5 3.5 0 0 1 4.95 0");
}
</style><g class="hntgybcog"><path class="tpnyvdgai"/><path class="ijkosm9dz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:signals-ahead-sign"} {...others} />);
}

export default Component;
