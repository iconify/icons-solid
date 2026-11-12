import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.urwe8bb9z {
  d: path("M19 19L5 5");
}

.w7opg4b1i {
  d: path("M19.0068 5L5.00684 19");
}
</style><g class="ipq1z-bjh"><path class="w7opg4b1i"/><path class="urwe8bb9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:close-linear"} {...others} />);
}

export default Component;
