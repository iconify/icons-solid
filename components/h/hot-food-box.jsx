import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbfem7blo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18l-1.5 8.5A1.5 1.5 0 0 1 18 21H6a1.5 1.5 0 0 1-1.5-1.5Zm6-8c-1 1.5 1 3 0 4.5M15 3c-1 1.5 1 3 0 4.5M12 4c-1 1.5 1 3 0 4.5");
}
</style><path class="dbfem7blo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hot-food-box"} {...others} />);
}

export default Component;
