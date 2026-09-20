import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fced2hbbk {
  fill: currentColor;
  d: path("M2 21h6V6L5 3L2 6zm7 0h6V6l-3-3l-3 3zm7 0h6V6l-3-3l-3 3z");
}
</style><path class="fced2hbbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:outdoor-garden-rounded"} {...others} />);
}

export default Component;
