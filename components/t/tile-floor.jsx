import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jv4hsm_yi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.207 4.5h9.586a1.5 1.5 0 0 1 1.465 1.179l2.844 13a1.5 1.5 0 0 1-1.466 1.821H4.364a1.5 1.5 0 0 1-1.466-1.821l2.844-13A1.5 1.5 0 0 1 7.207 4.5M12 4.5v16m-7.75-8h15.5");
}
</style><path class="jv4hsm_yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tile-floor"} {...others} />);
}

export default Component;
