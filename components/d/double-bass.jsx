import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fjm3t_97c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10c-3.5 0-4 1.5-3.25 3.5c.5 1.5-2.75 2-2.75 5c0 2.25 2.5 3 6 3s6-.75 6-3c0-3-3.25-3.5-2.75-5C16 11.5 15.5 10 12 10m0-5v11.5M12 5a1.5 1.5 0 1 1 1.5-1.5");
}
</style><path class="fjm3t_97c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:double-bass"} {...others} />);
}

export default Component;
