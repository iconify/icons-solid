import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.znghkbtgf {
  fill: currentColor;
  d: path("M3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3h-17A4.5 4.5 0 0 0 3 7.5m20 10.929c0 3.642-3.134 6.071-7 6.071s-7-2.429-7-6.071A2.43 2.43 0 0 1 11.429 16h9.142A2.43 2.43 0 0 1 23 18.429m-3.25-7.679a3.75 3.75 0 1 1-7.5 0a3.75 3.75 0 0 1 7.5 0");
}
</style><path class="znghkbtgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:person-square-32-filled"} {...others} />);
}

export default Component;
