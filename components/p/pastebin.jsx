import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n85hlpbod {
  cx: 28.08px;
  cy: 12.83px;
  r: 2.48px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w8rw27ipd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.37 10.35H7a2.48 2.48 0 0 0-2.5 2.48v22.34a2.5 2.5 0 0 0 5 0v-6.83h3.89c5.74 0 9-3.28 9-9s-3.28-8.99-9.02-8.99m0 13H9.48v-8h3.89c3 0 4.05 1.09 4.05 4s-1.1 4.01-4.05 4.01Zm21.1-3.69h-3.89v-.45a2.5 2.5 0 0 0-5 0v16a2.48 2.48 0 0 0 2.48 2.48h6.39c5.74 0 9-3.27 9-9s-3.24-9.03-8.98-9.03m0 13h-3.89v-8h3.89c3 0 4.05 1.08 4.05 4s-1.1 4.01-4.05 4.01Z");
}
</style><path class="w8rw27ipd"/><circle class="n85hlpbod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pastebin"} {...others} />);
}

export default Component;
