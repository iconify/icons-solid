import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q0jeb4hqf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13 2.75h-2q-3.831 0-6.541 2.709Q1.75 8.169 1.75 12t2.709 6.541Q7.169 21.25 11 21.25h2q3.831 0 6.541-2.709Q22.25 15.831 22.25 12t-2.709-6.541Q16.831 2.75 13 2.75M6.25 12q0-2.382 1.684-4.066T12 6.25t4.066 1.684T17.75 12t-1.684 4.066T12 17.75t-4.066-1.684T6.25 12");
}
</style><path class="q0jeb4hqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:garbage-disposal"} {...others} />);
}

export default Component;
