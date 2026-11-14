import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n70xgybix {
  d: path("M11.9 17H2.5V4h19v8.8");
}

.r7gw_9_pz {
  d: path("m3 5.5l9 5.75l9-5.75M18 15v6m2.598-4.5l-5.196 3m0-3l5.196 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n70xgybix"/><path class="r7gw_9_pz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cold-email"} {...others} />);
}

export default Component;
