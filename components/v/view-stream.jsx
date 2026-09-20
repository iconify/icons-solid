import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ai8znbbzz {
  fill: currentColor;
  d: path("M3 19v-6h18v6zm0-8V5h18v6z");
}
</style><path class="ai8znbbzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-stream"} {...others} />);
}

export default Component;
