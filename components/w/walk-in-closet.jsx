import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gnl8uyjdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19M3 3.5v18m18-18v18M7 3.5v3m-2.25 4L7 6.5l2.25 4zm7.25-7V9m-2.25 4L12 9l2.25 4zM17 3.5v3m-2.25 4l2.25-4l2.25 4z");
}
</style><path class="gnl8uyjdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:walk-in-closet"} {...others} />);
}

export default Component;
