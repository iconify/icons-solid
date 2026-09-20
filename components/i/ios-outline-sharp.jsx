import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gi2a7l2pr {
  fill: currentColor;
  d: path("M4 9V7h2v2zm0 8v-6h2v6zm3 0V7h6v10zm2-2h2V9H9zm5 2v-2h4v-2h-4V7h6v2h-4v2h4v6z");
}
</style><path class="gi2a7l2pr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ios-outline-sharp"} {...others} />);
}

export default Component;
