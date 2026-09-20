import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.iwwnq4buv {
  fill: currentColor;
  d: path("M5 13a3 3 0 1 1 2.96-3.5H9.5v-3A1.5 1.5 0 0 1 11 5h1.041a3.001 3.001 0 1 1 0 1H11a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1.041a3.001 3.001 0 1 1 0 1H11a1.5 1.5 0 0 1-1.5-1.5v-3H7.96A3 3 0 0 1 5 13");
}
</style><path class="iwwnq4buv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:organization-horizontal-20-filled"} {...others} />);
}

export default Component;
