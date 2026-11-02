import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lppmt7bfa {
  stroke-opacity: 0.4;
  d: path("M20 6v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vw22eibqi {
  d: path("m12 16l4-4l-4-4m4 4H4");
}
</style><g class="nrj6p8qat"><path class="lppmt7bfa"/><path class="vw22eibqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-right-to-line-duocolor"} {...others} />);
}

export default Component;
