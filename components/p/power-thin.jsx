import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.o-jx1j97d {
  fill: currentColor;
  d: path("M124 128V48a4 4 0 0 1 8 0v80a4 4 0 0 1-8 0m54.18-75.35a4 4 0 1 0-4.36 6.7C198.08 75.17 212 100.2 212 128a84 84 0 0 1-168 0c0-27.8 13.92-52.83 38.18-68.65a4 4 0 0 0-4.36-6.7C51.24 70 36 97.44 36 128a92 92 0 0 0 184 0c0-30.56-15.24-58-41.82-75.35");
}
</style><path class="o-jx1j97d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:power-thin"} {...others} />);
}

export default Component;
