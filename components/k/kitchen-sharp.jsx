import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zm-9o_b9j {
  fill: currentColor;
  d: path("M8.192 8h1V5.385h-1zm0 8.116h1v-4.347h-1zM5 21V10.385h14V21zM5 9.385V3h14v6.385z");
}
</style><path class="zm-9o_b9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:kitchen-sharp"} {...others} />);
}

export default Component;
