import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.o8cmwubqa {
  fill: currentColor;
  d: path("M15 28.996a1 1 0 1 1 0-2h10.585L3.297 4.707A1 1 0 0 1 4.71 3.293L27 25.582V14.996a1 1 0 1 1 2 0v13a1 1 0 0 1-1 1z");
}
</style><path class="o8cmwubqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-down-right-32-regular"} {...others} />);
}

export default Component;
