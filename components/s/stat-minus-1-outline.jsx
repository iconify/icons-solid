import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qesv06b8h {
  fill: currentColor;
  d: path("m12 15.375l-6-6l1.4-1.4L12 12.55l4.6-4.575l1.4 1.4z");
}
</style><path class="qesv06b8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stat-minus-1-outline"} {...others} />);
}

export default Component;
