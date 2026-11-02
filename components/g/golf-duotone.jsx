import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bk3uqxbgx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 5c0-1.265 1.076-2.164 2.298-2.167c.399-.001.793.092 1.149.273l4 2a2.116 2.116 0 0 1 0 3.788l-6 3A1 1 0 0 1 9 11Z");
}

.cbb6_ybah {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 11V5c0-.919 1.081-1.46 2-1l4 2a1.118 1.118 0 0 1 0 2zm0 0v6m-4 2c0 1.105 1.79 2 4 2s4-.895 4-2");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="bk3uqxbgx"/><path class="cbb6_ybah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:golf-duotone"} {...others} />);
}

export default Component;
