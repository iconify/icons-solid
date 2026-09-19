import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.u7113zb2h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.474 43.5a4.14 4.14 0 0 1-3.914-5.487l8.92-25.916a4.14 4.14 0 0 1 7.828 2.694l-8.92 25.916a4.14 4.14 0 0 1-3.914 2.793m16.133-4.803a4.14 4.14 0 0 1-3.914-5.487l8.92-25.916a4.14 4.14 0 0 1 7.828 2.694l-8.92 25.915a4.14 4.14 0 0 1-3.914 2.794m-3.917-2.803l-3.311-9.69m3.931-14.098l3.311 9.69");
}
</style><path class="u7113zb2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wallman"} {...others} />);
}

export default Component;
