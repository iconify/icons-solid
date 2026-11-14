import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dsnlt4rde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.316 13.099l-3.295 3.06A1.5 1.5 0 0 1 9.5 15.06V8.94a1.5 1.5 0 0 1 2.521-1.099l3.295 3.06a1.5 1.5 0 0 1 0 2.198");
}
</style><path class="dsnlt4rde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:caret-right"} {...others} />);
}

export default Component;
