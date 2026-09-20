import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.vr540ibpf {
  fill: currentColor;
  d: path("M15 29a1 1 0 1 0 2 0V3a1 1 0 1 0-2 0zm11.5-3h-8V6h8A3.5 3.5 0 0 1 30 9.5v13a3.5 3.5 0 0 1-3.5 3.5m-13-20h-8A3.5 3.5 0 0 0 2 9.5v13A3.5 3.5 0 0 0 5.5 26h8z");
}
</style><path class="vr540ibpf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:split-vertical-32-filled"} {...others} />);
}

export default Component;
