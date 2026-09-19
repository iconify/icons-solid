import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fsvq07bqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.5 5.5l-37 15.83l19 2.22zm0 0l-18 18.05l2.23 19zm-37 15.83L20 28l6.68 14.5l-2.23-18.95z");
}
</style><path class="fsvq07bqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yanavi"} {...others} />);
}

export default Component;
