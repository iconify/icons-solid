import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.e-0yrmrat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.94 26.91H20.2l-6 16.31a21.64 21.64 0 0 1 0-38.44l6 16.31h7.62l6-16.31a21.64 21.64 0 0 1 0 38.44Z");
}
</style><path class="e-0yrmrat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:storzbickel"} {...others} />);
}

export default Component;
