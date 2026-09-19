import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.aghvn85jk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.779 17.953c-.307-2.698-.15-5.46.494-8.163a23.7 23.7 0 0 0-9.367-4.29a17.74 17.74 0 0 0 2.267 17.6a17.74 17.74 0 0 0 16.41 6.747a23.65 23.65 0 0 0-1.75-10.24a23.66 23.66 0 0 1-18.102-9.23m-5.51 19.67c.307 2.698.15 5.46-.494 8.163a23.7 23.7 0 0 0 9.367 4.29a17.74 17.74 0 0 0-2.267-17.6a17.74 17.74 0 0 0-16.41-6.747a23.65 23.65 0 0 0 1.75 10.24a23.66 23.66 0 0 1 18.102 9.23");
}
</style><path class="aghvn85jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:xmind"} {...others} />);
}

export default Component;
