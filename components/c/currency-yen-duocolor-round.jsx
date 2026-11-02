import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mm4kkrtjd {
  d: path("m6 5l6 6l6-6m-6 6v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r769j7b0q {
  stroke-opacity: 0.4;
  d: path("M8 13h4m0 0h4m-8 4h4m0 0h4");
}
</style><g class="nrj6p8qat"><path class="r769j7b0q"/><path class="mm4kkrtjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:currency-yen-duocolor-round"} {...others} />);
}

export default Component;
