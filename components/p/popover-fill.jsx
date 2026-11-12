import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iuklytbur {
  fill: currentColor;
  d: path("M5 6h3.5l2.7-3.6a1 1 0 0 1 1.6 0L15.5 6H19a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m12 5H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2M7 15a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z");
}
</style><path class="iuklytbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:popover-fill"} {...others} />);
}

export default Component;
