import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p_t5mzb6o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M12.25 9h7.25a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-7.25a2 2 0 0 1-2-2a2 2 0 0 1 2-2M2.5 15.75h19");
}
</style><path class="p_t5mzb6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:casualty"} {...others} />);
}

export default Component;
