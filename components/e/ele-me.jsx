import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qasmmp1rv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.773 39.845a18.5 18.5 0 0 1-9.702 2.731C13.811 42.576 5.495 34.26 5.495 24S13.812 5.424 24.07 5.424c6.222 0 11.73 3.059 15.1 7.755L21.774 25.076m20.731 1.234a19 19 0 0 1-.435 2.302");
}
</style><path class="qasmmp1rv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ele-me"} {...others} />);
}

export default Component;
