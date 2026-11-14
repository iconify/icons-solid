import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dffip4b-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 8.5h3c1 0 1.5.5 1.75 1.5l.25 1c2.5.75 4 2.5 3.75 4.5c-.25 1.75-1.75 2.75-3.75 2.5l-.25 3.5H8V17c-.75-1.5-1.25-4-1-6c.25-1.5.75-2.5 1.5-2.5m-.25-3.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><path class="dffip4b-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pregnant-woman"} {...others} />);
}

export default Component;
