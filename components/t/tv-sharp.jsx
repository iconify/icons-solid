import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l6-znbc-o {
  fill: currentColor;
  d: path("M9 20v-2H3V4h18v14h-6v2z");
}
</style><path class="l6-znbc-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tv-sharp"} {...others} />);
}

export default Component;
