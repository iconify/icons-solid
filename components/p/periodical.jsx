import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xscz0hx-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.41 4.52c.46-.47 7.16 9 9.4 13.24c6 11.49 5.84 19.29-.58 23.8a12 12 0 0 1-10.77 1.16c-4.69-2.12-6.93-6-6.62-11.42c.18-3.21.68-4.64 3.7-10.68c2.9-5.78 3.6-7.74 4.1-11.45a40 40 0 0 1 .77-4.65");
}
</style><path class="xscz0hx-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:periodical"} {...others} />);
}

export default Component;
