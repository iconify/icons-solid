import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wbt8rq5lk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.685 16.457A13.5 13.5 0 0 1 5.5 18.5C4.5 10 10 3 19.5 3c0 3.786-1.032 7.016-2.749 9.533m-1.414 1.753a13 13 0 0 1-1.109 1.046M3 21l9.5-9.5M18 15v6m-3-3h6");
}
</style><path class="wbt8rq5lk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:leaf-plus"} {...others} />);
}

export default Component;
