import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pcp2iabnl {
  fill: currentColor;
  d: path("M11.5 19v-8.65l-2.33 2.33l-.708-.718L12 8.423l3.539 3.539l-.708.719L12.5 10.35V19zM5 9.039V6.616q0-.691.463-1.153T6.616 5h10.769q.69 0 1.153.463T19 6.616v2.423h-1V6.616q0-.231-.192-.424T17.384 6H6.616q-.231 0-.424.192T6 6.616v2.423z");
}
</style><path class="pcp2iabnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:publish-outline"} {...others} />);
}

export default Component;
