import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xg52vtb0b {
  fill: currentColor;
  d: path("M224 36h-56a12 12 0 0 0-8.82 3.86L66.75 140H32a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h56a12 12 0 0 0 8.82-3.86L189.25 116H224a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 56h-36a12 12 0 0 0-8.82 3.86L82.75 196H36v-32h36a12 12 0 0 0 8.82-3.86L173.25 60H220Zm12.49 75.51a12 12 0 0 1-17 17L212 181v27a12 12 0 0 1-24 0v-27l-3.51 3.52a12 12 0 0 1-17-17l24-24a12 12 0 0 1 17 0Z");
}
</style><path class="xg52vtb0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:escalator-up-bold"} {...others} />);
}

export default Component;
