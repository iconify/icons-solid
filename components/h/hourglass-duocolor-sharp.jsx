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

.wew2rgbhy {
  d: path("M7 3v4l5 5l-5 5v4M17 3v4l-5 5l5 5v4");
}

.yvebdkb2o {
  stroke-opacity: 0.4;
  d: path("M5 3h14M5 21h14");
}
</style><g class="nrj6p8qat"><path class="yvebdkb2o"/><path class="wew2rgbhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hourglass-duocolor-sharp"} {...others} />);
}

export default Component;
