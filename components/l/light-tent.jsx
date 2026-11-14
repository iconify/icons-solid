import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gqhioybxo {
  d: path("M7 15a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l1aoo2bhv {
  d: path("M3 7.5h13v13H3Zm0 0L7.5 3h13v13L16 20.5m0-13L20.5 3");
}
</style><g class="hntgybcog"><path class="l1aoo2bhv"/><path class="gqhioybxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:light-tent"} {...others} />);
}

export default Component;
