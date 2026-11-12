import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ev6r3bcvw {
  d: path("M11 5a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4h-6a2 2 0 0 1-2-2m-8 8a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wj9xfdcvp {
  stroke-opacity: 0.4;
  d: path("M18 19h-4v-4m0 4l6-6");
}
</style><g class="nrj6p8qat"><path class="wj9xfdcvp"/><path class="ev6r3bcvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-transpose-duocolor-round"} {...others} />);
}

export default Component;
