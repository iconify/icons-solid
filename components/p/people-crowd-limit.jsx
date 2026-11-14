import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.se7tnl18s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18M2.75 20v-2c0-2.25 1-3.75 2.25-3.75s2.25 1.5 2.25 3.75v2m-4-10.5a1.75 1.75 0 0 1 3.5 0a1.75 1.75 0 0 1-3.5 0ZM9.75 20v-2c0-2.25 1-3.75 2.25-3.75s2.25 1.5 2.25 3.75v2m-4-10.5a1.75 1.75 0 0 1 3.5 0a1.75 1.75 0 0 1-3.5 0Zm6.5 10.5v-2c0-2.25 1-3.75 2.25-3.75s2.25 1.5 2.25 3.75v2m-4-10.5a1.75 1.75 0 0 1 3.5 0a1.75 1.75 0 0 1-3.5 0Z");
}
</style><path class="se7tnl18s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:people-crowd-limit"} {...others} />);
}

export default Component;
