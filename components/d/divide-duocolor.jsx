import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vslz5yb3q {
  d: path("M6 12h12");
}

.z-z3qw_6i {
  stroke-opacity: 0.4;
  d: path("M12 7h.01M12 17h.01");
}
</style><g class="nrj6p8qat"><path class="z-z3qw_6i"/><path class="vslz5yb3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:divide-duocolor"} {...others} />);
}

export default Component;
