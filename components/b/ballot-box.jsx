import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fkqnxybkw {
  d: path("M8.75 5L11 7.25l4.25-4.5");
}

.g2dkuobet {
  width: 16.5px;
  height: 11px;
  x: 3.75px;
  y: 10.25px;
  rx: 2px;
}

.gcalxb98a {
  d: path("M8 13h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fkqnxybkw"/><rect class="g2dkuobet"/><path class="gcalxb98a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ballot-box"} {...others} />);
}

export default Component;
