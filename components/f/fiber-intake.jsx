import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.twk6xdbin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19M12 8Q8.5 8 8.5 4.5Q12 4.5 12 8m0 4.5q-3.5 0-3.5-3.5Q12 9 12 12.5m0 4.5q-3.5 0-3.5-3.5q3.5 0 3.5 3.5m0-9q3.5 0 3.5-3.5Q12 4.5 12 8m0 4.5q3.5 0 3.5-3.5Q12 9 12 12.5m0 4.5q3.5 0 3.5-3.5q-3.5 0-3.5 3.5");
}
</style><path class="twk6xdbin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fiber-intake"} {...others} />);
}

export default Component;
