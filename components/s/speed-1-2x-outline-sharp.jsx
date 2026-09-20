import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gczh0bb3b {
  fill: currentColor;
  d: path("M6 17v-2h2v2zm3 0v-6h3.5V9H9V7h5.5v6H11v2h3.5v2zm-6 0V9H1V7h4v10zm12.5 0l3-5l-3-5h2l2 3.325L21.5 7h2l-3 5l3 5h-2l-2-3.325l-2 3.325z");
}
</style><path class="gczh0bb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:speed-1-2x-outline-sharp"} {...others} />);
}

export default Component;
