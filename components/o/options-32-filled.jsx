import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.cffkbibkc {
  fill: currentColor;
  d: path("M11.5 19.5a4.5 4.5 0 0 1 4.389 3.5H29a1 1 0 1 1 0 2H15.889a4.502 4.502 0 0 1-8.778 0H3a1 1 0 1 1 0-2h4.111a4.5 4.5 0 0 1 4.389-3.5m9-16A4.5 4.5 0 0 1 24.889 7H29a1 1 0 1 1 0 2h-4.111a4.502 4.502 0 0 1-8.778 0H3a1 1 0 0 1 0-2h13.111A4.5 4.5 0 0 1 20.5 3.5");
}
</style><path class="cffkbibkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:options-32-filled"} {...others} />);
}

export default Component;
