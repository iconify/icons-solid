import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.jtg1620ro {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m11 8l6-3c1.838-.919 4 .162 4 2v8c0 1.838-2.162 2.919-4 2l-6-3zm0 0H6a3 3 0 0 0 0 6h5m-6 0v5a2 2 0 1 0 4 0v-5");
}

.qdu0r7agy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m11 8l6-3c1.838-.919 4 .162 4 2v8c0 1.838-2.162 2.919-4 2l-6-3Z");
}
</style><g class="ft5dv1b6b"><path class="qdu0r7agy"/><path class="jtg1620ro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:megaphone-duotone-round"} {...others} />);
}

export default Component;
