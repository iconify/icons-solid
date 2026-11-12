import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.evpjv6bed {
  d: path("M3 3h18v14H3Zm0 18h3m4 0h4m4 0h3");
}

.igvmqocwj {
  stroke-opacity: 0.4;
  d: path("m10 6l6 4l-6 4z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="igvmqocwj"/><path class="evpjv6bed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chapters-duocolor-sharp"} {...others} />);
}

export default Component;
