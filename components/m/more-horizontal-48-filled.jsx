import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ie8olfbyc {
  fill: currentColor;
  d: path("M16 24a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m11.5 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m8 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7");
}
</style><path class="ie8olfbyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:more-horizontal-48-filled"} {...others} />);
}

export default Component;
