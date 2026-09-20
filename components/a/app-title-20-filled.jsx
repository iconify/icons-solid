import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.dac8vpb2t {
  fill: currentColor;
  d: path("M7 3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4.5 17a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z");
}
</style><path class="dac8vpb2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:app-title-20-filled"} {...others} />);
}

export default Component;
