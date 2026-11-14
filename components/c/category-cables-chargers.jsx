import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b8yqf2bus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 6.5h4a3.5 3.5 0 0 1 3.5 3.5v3a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 13v-3A3.5 3.5 0 0 1 8 6.5M8 3v3.5M12 3v3.5m-2 10V18c0 3.5 4 3.5 7 3.5h4");
}
</style><path class="b8yqf2bus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:category-cables-chargers"} {...others} />);
}

export default Component;
