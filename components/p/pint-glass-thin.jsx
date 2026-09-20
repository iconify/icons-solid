import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.iyetuqb1s {
  fill: currentColor;
  d: path("M203 29.35a4 4 0 0 0-3-1.35H56a4 4 0 0 0-4 4.48l23.15 193A12 12 0 0 0 87.1 236h81.8a12 12 0 0 0 11.92-10.57L204 32.48a4 4 0 0 0-1-3.13M195.49 36l-3.84 32H64.35l-3.84-32Zm-22.62 188.48a4 4 0 0 1-4 3.52H87.1a4 4 0 0 1-4-3.52L65.31 76h125.38Z");
}
</style><path class="iyetuqb1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:pint-glass-thin"} {...others} />);
}

export default Component;
