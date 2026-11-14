import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fa-bi72wb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13.75h17L18 17H6ZM12 11v2.75M12 3v8h6.5c0-4-3-6.5-6.5-8M2.5 20.5q4.75-1.5 9.5 0t9.5 0");
}
</style><path class="fa-bi72wb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bay-boats"} {...others} />);
}

export default Component;
