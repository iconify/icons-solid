import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hyxd6kb4z {
  fill: currentColor;
  d: path("M3 15.5h18V13H3zM3 11h18V8.5H3zm0-4.5h18V4H3zM21 21V3zM3 20h18v-2.5H3z");
}
</style><path class="hyxd6kb4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:table-rows-narrow-sharp"} {...others} />);
}

export default Component;
