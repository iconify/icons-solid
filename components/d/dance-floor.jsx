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

.urlfqxb0h {
  d: path("M7.75 11.5h8.5q.75 0 1.05.69l3.65 8.37q.3.69-.45.69h-17q-.75 0-.45-.69l3.65-8.37q.3-.69 1.05-.69m4.25 0v9.75m-7.25-5h14.5");
}

.wv5f_1brg {
  cx: 12px;
  cy: 5.25px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="urlfqxb0h"/><circle class="wv5f_1brg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dance-floor"} {...others} />);
}

export default Component;
