import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.urd-khb9h {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V8H4zm3.5-1.711l-.689-.689L9.388 13l-2.6-2.6l.713-.688L10.789 13zm5 .211v-1h5v1z");
}
</style><path class="urd-khb9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:terminal-outline-sharp"} {...others} />);
}

export default Component;
