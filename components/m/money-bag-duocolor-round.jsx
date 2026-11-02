import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g5tsn9vds {
  d: path("m13 8l5 5c.64.64 1 1.72 1 3v2a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-2c0-1.28.36-2.36 1-3l5-5l-3-5h8z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oj5n083ag {
  stroke-opacity: 0.4;
  d: path("M10 8h4");
}
</style><g class="nrj6p8qat"><path class="oj5n083ag"/><path class="g5tsn9vds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:money-bag-duocolor-round"} {...others} />);
}

export default Component;
