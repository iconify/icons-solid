import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ik969zchn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.5c3.5 1.5 5 5 5 8c0 3.25-2.25 5.5-5 5.5s-5-2.25-5-5.5c0-3 1.5-6.5 5-8m0-3za1.25 1.25 0 0 1 1.25 1.25V6A1.25 1.25 0 0 1 12 7.25A1.25 1.25 0 0 1 10.75 6v-.25A1.25 1.25 0 0 1 12 4.5m-.5 0l-.25-1.75M12.5 4.5l.25-1.75M8 11L4.75 8.5m2.5 5l-3.75-1M7 16l-3.5 1m4.25 1.5l-3 2.5M16 11l3.25-2.5m-2.5 5l3.75-1M17 16l3.5 1m-4.25 1.5l3 2.5");
}
</style><path class="ik969zchn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tick-bite"} {...others} />);
}

export default Component;
