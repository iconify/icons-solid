import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ghuu3hf0r {
  fill: currentColor;
  d: path("M3 19v-3.73h1V18h16V6H4v2.73H3V5h18v14zm8.885-3.577l-.708-.72l2.21-2.203H3v-1h10.387l-2.21-2.204l.708-.719L15.308 12z");
}
</style><path class="ghuu3hf0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:input-outline-sharp"} {...others} />);
}

export default Component;
