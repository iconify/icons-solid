import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gtej_1bxl {
  d: path("M12 17H8.778a3 3 0 0 1-3-3V9.806a3 3 0 0 1 1.024-2.258l3.222-2.82a3 3 0 0 1 3.952 0l3.222 2.82a3 3 0 0 1 1.024 2.258V14a3 3 0 0 1-3 3z");
}

.klsy0lb8n {
  stroke-opacity: 0.4;
  d: path("M12 17v4m-8 0h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="klsy0lb8n"/><path class="gtej_1bxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-connection-duocolor-round"} {...others} />);
}

export default Component;
