import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cgwbwtp3a {
  stroke-opacity: 0.4;
  d: path("m8 15l3 3l5-5");
}

.kcxs7db4r {
  d: path("M4 10h16v11H4Zm5 0V6a3 3 0 0 1 6 0v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cgwbwtp3a"/><path class="kcxs7db4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-check-duocolor-sharp"} {...others} />);
}

export default Component;
