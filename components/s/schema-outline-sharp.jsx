import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r8eyg7oat {
  fill: currentColor;
  d: path("M4 23v-6h2.5v-2H4V9h2.5V7H4V1h7v6H8.5v2H11v2h3V9h7v6h-7v-2h-3v2H8.5v2H11v6zm2-2h3v-2H6zm0-8h3v-2H6zm10 0h3v-2h-3zM6 5h3V3H6zm1.5 15");
}
</style><path class="r8eyg7oat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:schema-outline-sharp"} {...others} />);
}

export default Component;
