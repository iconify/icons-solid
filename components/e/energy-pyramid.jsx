import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qb9-s99qs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.955 17.896l6.517-11.662a1.75 1.75 0 0 1 3.056 0l6.517 11.662a1.75 1.75 0 0 1-1.528 2.604H5.483a1.75 1.75 0 0 1-1.528-2.604M8.75 9.25h6.5M5.5 15h13M12 17.75h.01");
}
</style><path class="qb9-s99qs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:energy-pyramid"} {...others} />);
}

export default Component;
