import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ljyyucbks {
  d: path("M3 12V19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p3f9wkane {
  stroke-opacity: 0.4;
  d: path("M3 5H16M7 12H21M7 19H21");
}
</style><g class="nrj6p8qat"><path class="p3f9wkane"/><path class="ljyyucbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:text-quote-duotone"} {...others} />);
}

export default Component;
