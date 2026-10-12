import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ckqhrcbbe {
  d: path("m6.6 17.4l6.65-6.65m-1.9-1.7l7.55-5.6q.6-.45 1.09.12l.52.61q.49.57-.11 1.02l-7.55 5.6q-.6.45-1.09-.12l-.52-.61q-.49-.57.11-1.02");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yohxqabuf {
  cx: 5px;
  cy: 19px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="yohxqabuf"/><path class="ckqhrcbbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:wiper-blade"} {...others} />);
}

export default Component;
