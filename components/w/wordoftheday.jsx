import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sc0-x2isb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.469 31.566c-4.031-2.425-5.143-19.503 4.374-19.299c9.626.207.08 23.467.08 23.467c6.703-5.923 10.14-16.112 16.949-21.899l-4.553 21.9c8.925-5.129 16.078-18.195 11.577-22.738c-1.42-1.434-3.287-.277-3.037 2.02c.453 4.16 6.641 4.844 6.641 4.844");
}
</style><circle class="cpk0fnbgt"/><path class="sc0-x2isb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wordoftheday"} {...others} />);
}

export default Component;
