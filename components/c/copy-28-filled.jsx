import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.hsat-1bde {
  fill: currentColor;
  d: path("M10 16.25A4.75 4.75 0 0 0 14.75 21H17v.25A3.75 3.75 0 0 1 13.25 25h-6.5A3.75 3.75 0 0 1 3 21.25v-9.5A3.75 3.75 0 0 1 6.75 8H10zM21.25 3A3.75 3.75 0 0 1 25 6.75v9.5A3.75 3.75 0 0 1 21.25 20h-6.5A3.75 3.75 0 0 1 11 16.25v-9.5A3.75 3.75 0 0 1 14.75 3z");
}
</style><path class="hsat-1bde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:copy-28-filled"} {...others} />);
}

export default Component;
