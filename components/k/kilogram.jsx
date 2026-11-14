import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.utqwg3p7t {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.75 5.5q0-3.25 3.25-3.25t3.25 3.25q0 1.042-.334 1.75h1.649q2.05 0 2.451 2.01l1.8 9q.232 1.16-.518 2.075t-1.933.915H5.635q-1.183 0-1.933-.915t-.518-2.075l1.8-9q.401-2.01 2.451-2.01h1.649Q8.75 6.542 8.75 5.5");
}
</style><path class="utqwg3p7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:kilogram"} {...others} />);
}

export default Component;
