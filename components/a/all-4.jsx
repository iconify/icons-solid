import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.miz5sx9ln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.59 43.5h-7.051m-4.938 0v-9.804m4.938 5.721v-5.721M17.513 43.5h1.655m4.433-14.026H9.173m29.061 0h-9.695m0-4.469v-12.99m0-4.917V4.5m-4.938 4.918v15.587m-3.685-9.619l-8.958 10.545");
}
</style><path class="miz5sx9ln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:all-4"} {...others} />);
}

export default Component;
