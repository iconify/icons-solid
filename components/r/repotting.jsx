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

.or2w3lbjj {
  d: path("m4 12l2 9.5h12l2-9.5");
}

.zu6isikrg {
  d: path("M9.307 10h5.386a1.5 1.5 0 0 1 1.474 1.776l-.938 5A1.5 1.5 0 0 1 13.755 18h-3.51a1.5 1.5 0 0 1-1.474-1.224l-.938-5A1.5 1.5 0 0 1 9.307 10M12 10V5m0 2.25C12 5.25 10.5 4 8 4c0 2 1.5 3.25 4 3.25M12 6c0-2 1.5-3.25 4-3.25c0 2-1.5 3.25-4 3.25");
}
</style><g class="hntgybcog"><path class="or2w3lbjj"/><path class="zu6isikrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:repotting"} {...others} />);
}

export default Component;
