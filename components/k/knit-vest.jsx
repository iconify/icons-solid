import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.za8_twbrh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.5 3l3.5 7l3.5-7h2c0 4 1 6 2.5 6.5V21H4V9.5C5.5 9 6.5 7 6.5 3ZM4 17.5h16m-12 0V21m4-3.5V21m4-3.5V21");
}
</style><path class="za8_twbrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:knit-vest"} {...others} />);
}

export default Component;
