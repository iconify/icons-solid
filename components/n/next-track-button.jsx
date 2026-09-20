import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.b9aqm66oi {
  d: path("m6.24 95.18l48.94-28.26v28.26L109.17 64L55.18 32.82v28.26L6.24 32.82z");
}

.unsl_58gz {
  d: path("M104.18 33.23h17.58v61.54h-17.58z");
}

.y94jm1b4c {
  fill: var(--svg-color--40c0e7, #40c0e7);
}
</style><g class="y94jm1b4c"><path class="b9aqm66oi"/><path class="unsl_58gz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:next-track-button"} {...others} />);
}

export default Component;
