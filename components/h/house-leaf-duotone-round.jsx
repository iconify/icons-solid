import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.j6xrcibce {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21H8a4 4 0 0 1-4-4v-5.185a4 4 0 0 1 1.366-3.01l4-3.5a4 4 0 0 1 5.268 0l4 3.5A4 4 0 0 1 20 11.815V17a4 4 0 0 1-4 4zm-3-5c3.5 2 6.5-.5 6-6m0 0c-5.5-.5-8 2.5-6 6m-1 1l3-3");
}

.xvfhj-u6p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M16 21H8a4 4 0 0 1-4-4v-5.185a4 4 0 0 1 1.366-3.01l4-3.5a4 4 0 0 1 5.268 0l4 3.5A4 4 0 0 1 20 11.815V17a4 4 0 0 1-4 4");
}
</style><g class="ft5dv1b6b"><path class="xvfhj-u6p"/><path class="j6xrcibce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-leaf-duotone-round"} {...others} />);
}

export default Component;
