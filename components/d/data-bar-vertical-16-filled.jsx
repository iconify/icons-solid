import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.ty_zuvenm {
  fill: currentColor;
  d: path("M3.5 2A1.5 1.5 0 0 0 2 3.5v9a1.5 1.5 0 0 0 3 0v-9A1.5 1.5 0 0 0 3.5 2m4 3A1.5 1.5 0 0 0 6 6.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 7.5 5m4 3A1.5 1.5 0 0 0 10 9.5v3a1.5 1.5 0 0 0 3 0v-3A1.5 1.5 0 0 0 11.5 8");
}
</style><path class="ty_zuvenm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:data-bar-vertical-16-filled"} {...others} />);
}

export default Component;
