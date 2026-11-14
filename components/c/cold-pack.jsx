import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r6lu4hbho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3h6.5a5.25 5.25 0 0 1 5.25 5.25v7.5A5.25 5.25 0 0 1 15.25 21h-6.5a5.25 5.25 0 0 1-5.25-5.25v-7.5A5.25 5.25 0 0 1 8.75 3M3.5 7h17M12 10v9m-3.75-6.75l7.5 4.5m-7.5 0l7.5-4.5");
}
</style><path class="r6lu4hbho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cold-pack"} {...others} />);
}

export default Component;
