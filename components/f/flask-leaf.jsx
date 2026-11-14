import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iktgjfasb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 9.5V12l-4.25 6.75Q4.5 21 6.75 21h10.5q2.25 0 1.5-2.25L14.5 12V9.5m-2.5 0V5.75M12 6c0-2.5 2.5-3.5 5.5-3.25C17.5 5.25 15 6.5 12 6");
}
</style><path class="iktgjfasb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flask-leaf"} {...others} />);
}

export default Component;
