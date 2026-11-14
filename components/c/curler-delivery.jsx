import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d6g10obky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.5h5.5a4 4 0 0 1 4 4a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 0V6a2 2 0 0 1 2-2h5.5m-17 15.5h19M8 12.5h13.5m-19 0h2.75");
}
</style><path class="d6g10obky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:curler-delivery"} {...others} />);
}

export default Component;
