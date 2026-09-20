import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x5dwjebgx {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5H5zm0 0V5zm2-8h4V7H7zm6 0h4V7h-4zm-6 6h4v-4H7zm6 0h4v-4h-4z");
}
</style><path class="x5dwjebgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dataset-outline-sharp"} {...others} />);
}

export default Component;
