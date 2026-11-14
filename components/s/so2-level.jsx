import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lwoad2bzt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 21.5l1.75-9l-1-1.75h7l-1 1.75l1.75 9ZM7.5 8a2 2 0 0 1 1-3.75A3 3 0 0 1 14 4a2.5 2.5 0 0 1 4.5 1a1.75 1.75 0 0 1 .5 3Zm8.25 13v-2.5M18.5 21v-4.5m2.75 4.5v-6.5");
}
</style><path class="lwoad2bzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:so2-level"} {...others} />);
}

export default Component;
