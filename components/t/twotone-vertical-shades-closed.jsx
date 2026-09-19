import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e5oufi-gp {
  fill: currentColor;
  d: path("M9.5 5H11v14H9.5zM6 5h1.5v14H6zm7 0h1.5v14H13zm3.5 0H18v14h-1.5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.qcaetsbod {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zM7.5 19H6V5h1.5zm3.5 0H9.5V5H11zm3.5 0H13V5h1.5zm3.5 0h-1.5V5H18z");
}
</style><path class="e5oufi-gp"/><path class="qcaetsbod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-vertical-shades-closed"} {...others} />);
}

export default Component;
