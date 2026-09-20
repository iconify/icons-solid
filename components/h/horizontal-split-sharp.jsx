import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dr87vet0p {
  fill: currentColor;
  d: path("M3 19v-6h18v6zm0-8V9h18v2zm0-4V5h18v2z");
}
</style><path class="dr87vet0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:horizontal-split-sharp"} {...others} />);
}

export default Component;
