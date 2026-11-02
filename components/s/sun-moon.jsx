import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ualdwgz4h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 15a6 6 0 1 1-6-6a4.269 4.269 0 0 0 6 6m-1.974-5.82a3 3 0 0 1 1.793 1.794M19 12h2m-9-7V3m4.95 4.05l1.414-1.414");
}
</style><path class="ualdwgz4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sun-moon"} {...others} />);
}

export default Component;
