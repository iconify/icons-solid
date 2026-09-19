import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f2fmple7f {
  fill: currentColor;
  d: path("M3 17h18v-2H3zm0 3h18v-1H3zm0-7h18v-3H3zm0-9v4h18V4z");
}
</style><path class="f2fmple7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-line-weight"} {...others} />);
}

export default Component;
