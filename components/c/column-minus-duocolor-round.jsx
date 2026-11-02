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

.s3qgoqb5n {
  d: path("M4 7a3 3 0 0 1 6 0v10a3 3 0 0 1-6 0Z");
}

.ub0p4xb7k {
  stroke-opacity: 0.4;
  d: path("M14 12h6");
}
</style><g class="nrj6p8qat"><path class="ub0p4xb7k"/><path class="s3qgoqb5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:column-minus-duocolor-round"} {...others} />);
}

export default Component;
