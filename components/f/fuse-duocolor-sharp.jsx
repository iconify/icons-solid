import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ingoogvsx {
  d: path("M5 3h14v3h-2v12h2v3H5v-3h2V6H5z");
}

.jps9vkgsi {
  stroke-opacity: 0.4;
  d: path("m13 8l-3 4h4l-3 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jps9vkgsi"/><path class="ingoogvsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fuse-duocolor-sharp"} {...others} />);
}

export default Component;
