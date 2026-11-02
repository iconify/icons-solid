import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k8k5xbcwl {
  stroke-opacity: 0.4;
  d: path("M6 11v6m4-6v6m4-6v6m4-6v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ocel1obnu {
  d: path("M12 7H3l9-4l9 4zM3 21h18");
}
</style><g class="nrj6p8qat"><path class="k8k5xbcwl"/><path class="ocel1obnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bank-duocolor-round"} {...others} />);
}

export default Component;
