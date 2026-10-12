import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ayqvk8bzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11.75h2.75q.75 0 1.21.59l.83 1.07q.46.59 1.21.59h5q.75 0 1.21-.59l.83-1.07q.46-.59 1.21-.59h2.75q.75 0 .75.75v8q0 .75-.75.75h-17q-.75 0-.75-.75v-8q0-.75.75-.75m-.75 5.75h18.5M5 9V3.75a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1V9M9.5 6h5");
}
</style><path class="ayqvk8bzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:letter-tray"} {...others} />);
}

export default Component;
