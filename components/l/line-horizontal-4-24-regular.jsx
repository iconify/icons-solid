import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dj4v-g-5e {
  fill: currentColor;
  d: path("M21.25 18.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm0-5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm0-5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5zm0-5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5z");
}
</style><path class="dj4v-g-5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-horizontal-4-24-regular"} {...others} />);
}

export default Component;
