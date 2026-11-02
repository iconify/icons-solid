import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fjmk1tc6j {
  d: path("M12 4a8 8 0 1 1-8 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vjl3nsngf {
  stroke-opacity: 0.4;
  d: path("M12 12L4 4m0 4V4h4");
}
</style><g class="nrj6p8qat"><path class="vjl3nsngf"/><path class="fjmk1tc6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:escape-duocolor-sharp"} {...others} />);
}

export default Component;
