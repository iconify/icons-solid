import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.hevctzbwg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 5h5.105a2 2 0 0 1 1.574.766a8.485 8.485 0 1 1-13.358 0A2 2 0 0 1 6.895 5ZM8 9h.01M12 9h.01M16 9h.01M10 14h.01M14 14h.01");
}

.krs-bh5eq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17.105 5c.614 0 1.195.283 1.574.766a8.485 8.485 0 1 1-13.358 0C5.7 5.283 6.281 5 6.895 5Z");
}
</style><g class="ft5dv1b6b"><path class="krs-bh5eq"/><path class="hevctzbwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ev-plug-duotone"} {...others} />);
}

export default Component;
