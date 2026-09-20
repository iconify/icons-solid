import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cs-txbpse {
  fill: currentColor;
  d: path("M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v12A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2zM8 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M7 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2m1 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-2 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="cs-txbpse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:clipboard-month-20-filled"} {...others} />);
}

export default Component;
