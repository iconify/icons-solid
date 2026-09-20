import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.xw70kx-6v {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 21.25V18.5h5v5H6.75a2.25 2.25 0 0 1-2.25-2.25M11 23.5v-5h6v5zM4.5 17V6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25V17zm14 6.5v-5h5v2.75a2.25 2.25 0 0 1-2.25 2.25z");
}
</style><path class="xw70kx-6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-bottom-row-28-regular"} {...others} />);
}

export default Component;
