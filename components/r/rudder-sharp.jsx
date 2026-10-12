import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mmre-hlzn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10V3.5m-6 0h9.5M11 10h6.5v11.25H11v-1Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ye0kv3bao {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14.25 13h.01");
}
</style><g class="ux2u0rbkq"><path class="mmre-hlzn"/><path class="ye0kv3bao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rudder-sharp"} {...others} />);
}

export default Component;
