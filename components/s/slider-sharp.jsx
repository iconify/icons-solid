import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ef7l6dbel {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 18C20 16.34 18.657 15 17 15H15C13.343 15 12 16.34 12 18M20 18C20 19.66 18.657 21 17 21H15C13.343 21 12 19.66 12 18M20 18H23M12 18H1M2 3V11H10V3H2ZM22 7C22 4.79 20.209 3 18 3C15.791 3 14 4.79 14 7C14 9.21 15.791 11 18 11C20.209 11 22 9.21 22 7Z");
}
</style><path class="ef7l6dbel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:slider-sharp"} {...others} />);
}

export default Component;
