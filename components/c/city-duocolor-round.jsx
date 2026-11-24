import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j8yxavbwb {
  d: path("M3 21h18M9 21V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v16M12 7h.01M12 11h.01M12 15h.01M6 13h.01M6 17h.01M18 17h.01");
}

.k3b3pbzee {
  stroke-opacity: 0.4;
  d: path("M9 9H5a2 2 0 0 0-2 2v10m12-8h4a2 2 0 0 1 2 2v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="k3b3pbzee"/><path class="j8yxavbwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:city-duocolor-round"} {...others} />);
}

export default Component;
