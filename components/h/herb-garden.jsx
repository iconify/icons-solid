import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tg9jhviza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20h19M12 20V9m0 0c0-3 2-5 5-5c0 3-2 5-5 5M6.5 20v-6m0 0c0-2.5-2-4-4-4c0 2.5 2 4 4 4m11 6v-6m0 0c0-2.5 2-4 4-4c0 2.5-2 4-4 4");
}
</style><path class="tg9jhviza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:herb-garden"} {...others} />);
}

export default Component;
