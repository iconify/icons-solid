import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xv6qsr5vx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.755 12.31A14.11 14.11 0 0 0 9.747 24m6.22 11.699A14.11 14.11 0 0 0 37.964 24m-26.543 0h3.955l-5.438 5.438L4.5 24h3.955zm25.158 0h-3.955l5.438-5.438L43.5 24h-3.955zm-18.248.176l4.329 4.329l9.009-9.01");
}
</style><path class="xv6qsr5vx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:uptodate"} {...others} />);
}

export default Component;
