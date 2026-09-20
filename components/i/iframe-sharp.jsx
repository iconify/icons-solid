import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yee9k2bcc {
  fill: currentColor;
  d: path("M10 15v-5h8v5zm-7 4V5h18v14zm1-1h16V8H4z");
}
</style><path class="yee9k2bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:iframe-sharp"} {...others} />);
}

export default Component;
