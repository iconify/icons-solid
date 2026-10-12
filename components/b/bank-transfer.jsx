import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yx6wk3brd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.52 8.61l4.21-3.47q.77-.64 1.54 0l4.21 3.47q.77.64-.23.64h-9.5q-1 0-.23-.64M5 12v5m3.5-5v5m3.5-5v5m-9 2.75h11M16.25 12h5m-2.5-2.5l2.5 2.5l-2.5 2.5");
}
</style><path class="yx6wk3brd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bank-transfer"} {...others} />);
}

export default Component;
