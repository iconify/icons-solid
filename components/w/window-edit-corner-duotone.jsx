import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.n-m3mnbaj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2Zm10 13v-3l5-5l3 3l-5 5Z");
}

.rw2knkb6n {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M8 20H5a2 2 0 0 1-2-2V8m0 0h18m-8 13v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="n-m3mnbaj"/><path class="rw2knkb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:window-edit-corner-duotone"} {...others} />);
}

export default Component;
