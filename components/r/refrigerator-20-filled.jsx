import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ukeba5b6f {
  fill: currentColor;
  d: path("M16 15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9h12zm-9.5-5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5m6.654-7.996A3 3 0 0 1 16 5v3H4V5a3 3 0 0 1 3-3h6zM6.5 4a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5");
}
</style><path class="ukeba5b6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:refrigerator-20-filled"} {...others} />);
}

export default Component;
