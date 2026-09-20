import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nf3hn2w_r {
  fill: currentColor;
  d: path("M11.5 12.846V4h1v8.846zM4 20v-4.038h1V19h14v-3.038h1V20zm7.308-3.384V15.23h1.384v1.385z");
}
</style><path class="nf3hn2w_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:partner-reports-sharp"} {...others} />);
}

export default Component;
