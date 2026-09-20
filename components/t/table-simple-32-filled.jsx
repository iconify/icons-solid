import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.fvk_ppn7t {
  fill: currentColor;
  d: path("M17 29h7.5a4.5 4.5 0 0 0 4.5-4.5V17H17zm0-14h12V7.5A4.5 4.5 0 0 0 24.5 3H17zM15 3v12H3V7.5A4.5 4.5 0 0 1 7.5 3zm0 14v12H7.5A4.5 4.5 0 0 1 3 24.5V17z");
}
</style><path class="fvk_ppn7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-simple-32-filled"} {...others} />);
}

export default Component;
