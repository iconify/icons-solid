import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4p1-gbti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 21.25v-16a2.5 2.5 0 0 1 5 0v16Zm0-6.5h-2a2.25 2.25 0 0 1-2.25-2.25V9m9.25 3h2a2.25 2.25 0 0 0 2.25-2.25V7m-12 14.25h10.5");
}
</style><path class="a4p1-gbti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cactus"} {...others} />);
}

export default Component;
