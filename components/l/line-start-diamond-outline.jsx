import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jmfk_ccen {
  fill: currentColor;
  d: path("M9 16.175L13.175 12L9 7.825L4.825 12zM9 19l-7-7l7-7l6 6h7v2h-7zm0-7");
}
</style><path class="jmfk_ccen"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-start-diamond-outline"} {...others} />);
}

export default Component;
