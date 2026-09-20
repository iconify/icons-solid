import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.biw2jac5o {
  fill: currentColor;
  d: path("M6.5 14.5h8.289l1-1H6.5zm0-4h5v-1h-5zM4 7v10h8.289l-1 1H3V6h18v3.289h-1V7zm17.554 4.954q.106.105.106.236t-.106.237l-.785.785l-.788-.789l.784-.785q.106-.105.237-.105t.237.105zm-8.246 7.969v-.788l6.111-6.112l.789.789l-6.112 6.111zM4 7v10z");
}
</style><path class="biw2jac5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:checkbook-outline"} {...others} />);
}

export default Component;
