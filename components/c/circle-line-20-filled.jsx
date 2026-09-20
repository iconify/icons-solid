import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.pqphanbpv {
  fill: currentColor;
  d: path("M17.985 10.5H2.015a8 8 0 0 0 15.97 0m0-1H2.015a8 8 0 0 1 15.97 0");
}
</style><path class="pqphanbpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:circle-line-20-filled"} {...others} />);
}

export default Component;
