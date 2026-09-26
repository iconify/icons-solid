import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ejplk2-9k {
  d: path("M2.5 16L21.5 16C21.7761 16 22 16.2239 22 16.5L22 18C22 19.1046 21.1046 20 20 20L4 20C2.8954 20 2 19.1046 2 18L2 16.5C2 16.2239 2.2239 16 2.5 16Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.utcj7eb_s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 3L18 3C19.6569 3 21 4.3431 21 6L21 17L3 17L3 6C3 4.3431 4.3431 3 6 3Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="utcj7eb_s"/><path class="ejplk2-9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:laptop-duotone"} {...others} />);
}

export default Component;
