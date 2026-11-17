import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ih3jbkbab {
  d: path("M4 11h16a6 6 0 0 1-6 6v4H9v-4a5 5 0 0 1-5-5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rm5c8wr8c {
  stroke-opacity: 0.4;
  d: path("M4 11V3h6v8");
}
</style><g class="nrj6p8qat"><path class="rm5c8wr8c"/><path class="ih3jbkbab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:toilet-duocolor-sharp"} {...others} />);
}

export default Component;
