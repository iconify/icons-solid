import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ounu1bbaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0V13m3 2.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0V9m3 2.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 0V3");
}
</style><path class="ounu1bbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chorus-effect"} {...others} />);
}

export default Component;
