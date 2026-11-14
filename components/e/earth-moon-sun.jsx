import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmo4vboii {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18.25 4q0-2.25 2.25-2.25T22.75 4T20.5 6.25T18.25 4M15.5 5.75q-3.75 0-3.75 3.75t3.75 3.75t3.75-3.75t-3.75-3.75M1.25 16.5q0-2.382 1.684-4.066T7 10.75t4.066 1.684T12.75 16.5t-1.684 4.066T7 22.25t-4.066-1.684T1.25 16.5");
}
</style><path class="fmo4vboii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:earth-moon-sun"} {...others} />);
}

export default Component;
