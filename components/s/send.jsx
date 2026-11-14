import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ukuqs9bjv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.614 10.254l8.095-3.237a1.75 1.75 0 0 1 2.274 2.274l-3.237 8.095A1.506 1.506 0 0 1 11 17.5l-1.239-2.478a1.75 1.75 0 0 0-.783-.783L6.5 13a1.506 1.506 0 0 1 .114-2.746M9.5 14.5l9-9");
}
</style><path class="ukuqs9bjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:send"} {...others} />);
}

export default Component;
