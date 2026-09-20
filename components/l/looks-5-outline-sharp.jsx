import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c2xghc64o {
  fill: currentColor;
  d: path("M9 17h6v-6h-4V9h4V7H9v6h4v2H9zm-6 4V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="c2xghc64o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:looks-5-outline-sharp"} {...others} />);
}

export default Component;
