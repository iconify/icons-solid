import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.wqawb2r6l {
  fill: currentColor;
  d: path("M10 16.25A4.75 4.75 0 0 0 14.75 21H17v1.25A3.75 3.75 0 0 1 13.25 26h-7.5A3.75 3.75 0 0 1 2 22.25v-10.5A3.75 3.75 0 0 1 5.75 8H10zM22.25 2A3.75 3.75 0 0 1 26 5.75v10.5A3.75 3.75 0 0 1 22.25 20h-7.5A3.75 3.75 0 0 1 11 16.25V5.75A3.75 3.75 0 0 1 14.75 2z");
}
</style><path class="wqawb2r6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:copy-28-filled"} {...others} />);
}

export default Component;
