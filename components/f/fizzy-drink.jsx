import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u1ndw6bnt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 9v1.5l-2.5 3V20a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 16 20v-6.5l-2.5-3V9ZM7.25 5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M13 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="u1ndw6bnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fizzy-drink"} {...others} />);
}

export default Component;
