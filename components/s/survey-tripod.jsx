import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cfvl47bbd {
  d: path("M12 9.5L4.5 21.25M12 9.5l7.5 11.75M12 9.5v11.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kktn2dazm {
  d: path("M8.75 7a3.25 3.25 0 0 1 6.5 0ZM12 3.75v-1");
}

.tzdzl8b3m {
  width: 8px;
  height: 2.5px;
  x: 8px;
  y: 7px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="cfvl47bbd"/><rect class="tzdzl8b3m"/><path class="kktn2dazm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:survey-tripod"} {...others} />);
}

export default Component;
