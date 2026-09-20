import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kjb024bcl {
  fill: currentColor;
  d: path("M6 17v-3H3v-2h3V9h2v3h3v2H8v3zm9.75 2V8.05l-2.3 1.65l-1.15-1.75L16.4 5H18v14z");
}
</style><path class="kjb024bcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:exposure-plus-1-sharp"} {...others} />);
}

export default Component;
