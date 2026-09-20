import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u1f1qob1f {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14v-7.615H5zm0-8.615h14V5H5zM12 8h6V6h-6zm-7 2.385V5z");
}
</style><path class="u1f1qob1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tabs-outline-sharp"} {...others} />);
}

export default Component;
