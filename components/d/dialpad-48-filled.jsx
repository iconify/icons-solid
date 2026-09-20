import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bahdv8jzm {
  fill: currentColor;
  d: path("M13.5 11.5a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m10.5-20a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m10.5-30a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6");
}
</style><path class="bahdv8jzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dialpad-48-filled"} {...others} />);
}

export default Component;
