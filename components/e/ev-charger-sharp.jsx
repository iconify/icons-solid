import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mckeoksds {
  fill: currentColor;
  d: path("M6 10h6V5H6zM4 21V3h10v9h3v7.5h2.25V9H18V6h.5V4.5h1V6h1V4.5h1V6h.5v3h-1.25v12H15.5v-7.5H14V21zm4.5-2l2.5-4H9.5v-3L7 16h1.5z");
}
</style><path class="mckeoksds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ev-charger-sharp"} {...others} />);
}

export default Component;
