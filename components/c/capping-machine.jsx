import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sudyqwx9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21.5V14a2 2 0 0 1 2-2v-1.5h4V12a2 2 0 0 1 2 2v7.5Zm3.25-14h1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5A1.5 1.5 0 0 1 9.75 9a1.5 1.5 0 0 1 1.5-1.5m-2.75-5h7A2.5 2.5 0 0 1 18 5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 6 5a2.5 2.5 0 0 1 2.5-2.5");
}
</style><path class="sudyqwx9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:capping-machine"} {...others} />);
}

export default Component;
