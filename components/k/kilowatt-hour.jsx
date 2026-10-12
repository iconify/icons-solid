import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mdswc-b6o {
  cx: 9px;
  cy: 9px;
  r: 6.25px;
}

.y5n07bccj {
  d: path("M9 5.75V9l2.25 1.5m7.37 1.71l-3.74 4.58q-.38.46.22.46h1.8q.6 0 .49.59l-.53 2.82q-.11.59.26.12l3.76-4.81q.37-.47-.23-.47h-1.8q-.6 0-.48-.59l.51-2.57q.12-.59-.26-.13");
}
</style><g class="hntgybcog"><circle class="mdswc-b6o"/><path class="y5n07bccj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kilowatt-hour"} {...others} />);
}

export default Component;
