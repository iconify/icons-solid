import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m6u_t4bqm {
  d: path("M4 20V4h5l3 3h7v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y5jslcbiw {
  d: path("m4 20 8 -8h10l-8 8Z");
}
</style><g class="nrj6p8qat"><path class="m6u_t4bqm"/><path class="y5jslcbiw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:folder-open-outline-regular"} {...others} />);
}

export default Component;
