import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eg5cwhtid {
  cx: 10px;
  cy: 14px;
  r: 8px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rbz79lbus {
  stroke-linejoin: round;
  d: path("M15.6359 8.33427L21.9999 2M16.9999 2H21.9999V7");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><circle class="eg5cwhtid"/><path class="rbz79lbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:men-line-duotone"} {...others} />);
}

export default Component;
