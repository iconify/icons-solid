import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vj2-kx-hn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6Q9 3.75 3 4.5v14q6-.75 9 1.5q3-2.25 9-1.5v-14q-6-.75-9 1.5m0 0v14m4.5-10.5V13m-1.75-1.75h3.5");
}
</style><path class="vj2-kx-hn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:first-aid-training"} {...others} />);
}

export default Component;
