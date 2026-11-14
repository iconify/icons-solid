import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.mab27ccjp {
  fill: currentColor;
  d: path("M25.251 22a.75.75 0 0 1 0 1.5H2.754a.75.75 0 0 1 0-1.5zm0-6a.75.75 0 0 1 0 1.5H2.754a.75.75 0 0 1 0-1.5zm0-6a.75.75 0 0 1 0 1.5H2.754a.75.75 0 0 1 0-1.5zm0-6a.75.75 0 0 1 0 1.5H2.754a.75.75 0 1 1 0-1.5z");
}
</style><path class="mab27ccjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-4-28-regular"} {...others} />);
}

export default Component;
