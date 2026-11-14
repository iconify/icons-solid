import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.urbtq_54r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 19.5l15-15m-12 12q3 0 3 3q-3 0-3-3m4-4q3 0 3 3q-3 0-3-3m4-4q3 0 3 3q-3 0-3-3m-8 8q-3 0-3-3q3 0 3 3m4-4q-3 0-3-3q3 0 3 3m4-4q-3 0-3-3q3 0 3 3");
}
</style><path class="urbtq_54r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:thyme-sprig"} {...others} />);
}

export default Component;
