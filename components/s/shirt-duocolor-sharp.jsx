import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kjmk02bci {
  d: path("M9 4L3 6v5h3v9h12v-9h3V6l-6-2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t4sagtegh {
  stroke-opacity: 0.4;
  d: path("M15 4a3 3 0 0 1-6 0");
}
</style><g class="nrj6p8qat"><path class="t4sagtegh"/><path class="kjmk02bci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shirt-duocolor-sharp"} {...others} />);
}

export default Component;
