import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y8i9nwwrp {
  fill: currentColor;
  d: path("M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z");
}
</style><path class="y8i9nwwrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:add-2-outline-sharp"} {...others} />);
}

export default Component;
