import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n-e1qqb_j {
  d: path("M12 16L12 3M8 7.375L12 3L16 7.375");
}

.p-1nc6b6p {
  d: path("M4 21L8 21M12 21L20 21");
}
</style><g class="hntgybcog"><path class="p-1nc6b6p"/><path class="n-e1qqb_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-up-from-line-broken"} {...others} />);
}

export default Component;
