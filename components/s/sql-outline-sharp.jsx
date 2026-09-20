import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ttcey-bvx {
  fill: currentColor;
  d: path("M3 15v-2h1.5v.5h2v-1H3V9h5v2H6.5v-.5h-2v1H8V15zm8.75 1.5V15H10V9h5v6h-1.75v1.5zm-.25-3h2v-3h-2zM17 15V9h1.5v4.5H21V15z");
}
</style><path class="ttcey-bvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sql-outline-sharp"} {...others} />);
}

export default Component;
