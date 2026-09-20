import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i0zbhv_dd {
  fill: currentColor;
  d: path("M4 23v-6h2.5v-2H4V9h2.5V7H4V1h7v6H8.5v2H11v2h3V9h7v6h-7v-2h-3v2H8.5v2H11v6z");
}
</style><path class="i0zbhv_dd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:schema-sharp"} {...others} />);
}

export default Component;
