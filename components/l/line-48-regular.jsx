import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rkrvudbag {
  fill: currentColor;
  d: path("M43.634 4.366a1.25 1.25 0 0 1 0 1.768l-37.5 37.5a1.25 1.25 0 0 1-1.768-1.768l37.5-37.5a1.25 1.25 0 0 1 1.768 0");
}
</style><path class="rkrvudbag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:line-48-regular"} {...others} />);
}

export default Component;
