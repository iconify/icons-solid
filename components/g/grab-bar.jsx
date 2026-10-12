import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eaczzeban {
  cx: 19px;
  cy: 6.5px;
  r: 2.25px;
}

.gsr9mu7_h {
  d: path("M5 8.75v4a2.5 2.5 0 0 0 2.5 2.5h9a2.5 2.5 0 0 0 2.5-2.5v-4M2.75 21.25h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v-nshmb6z {
  cx: 5px;
  cy: 6.5px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="v-nshmb6z"/><circle class="eaczzeban"/><path class="gsr9mu7_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:grab-bar"} {...others} />);
}

export default Component;
