import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.st8k20b7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21.5V5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 20 5v16.5M9.038 4.63l-3.5-1.346a1.5 1.5 0 0 0-2.038 1.4v14.93a1.5 1.5 0 0 0 1.837 1.462l3.5-.808A1.5 1.5 0 0 0 10 18.807V6.03a1.5 1.5 0 0 0-.962-1.4M6.25 12.5h.01");
}
</style><path class="st8k20b7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:door-open"} {...others} />);
}

export default Component;
