import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vbnn7qwwz {
  fill: currentColor;
  d: path("M9 19v-2h6.6L4 5.4L5.4 4L17 15.6V9h2v10z");
}
</style><path class="vbnn7qwwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:south-east-outline"} {...others} />);
}

export default Component;
