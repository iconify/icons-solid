import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bp7trtb7b {
  d: path("M6.5 16c2.5-1.5 1-6.5 4-8m-.25 8c2.5-1.5 1-6.5 4-8M14 16c2.5-1.5 1-6.5 4-8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qzuim9b1a {
  d: path("M4 5h16l1.5 1.75L20 8.5l1.5 1.75L20 12l1.5 1.75L20 15.5l1.5 1.75L20 19H4l-1.5-1.75L4 15.5l-1.5-1.75L4 12l-1.5-1.75L4 8.5L2.5 6.75Z");
}
</style><g class="hntgybcog"><path class="qzuim9b1a"/><path class="bp7trtb7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bacon-pack"} {...others} />);
}

export default Component;
