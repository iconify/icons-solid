import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t7aj_op-h {
  fill: currentColor;
  d: path("m12 21.925l-6-6l1.4-1.4L12 19.1l4.6-4.575l1.4 1.4zm0-5.95l-6-6l1.4-1.4L12 13.15l4.6-4.575l1.4 1.4zm0-5.95l-6-6l1.4-1.4L12 7.2l4.6-4.575l1.4 1.4z");
}
</style><path class="t7aj_op-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stat-minus-3"} {...others} />);
}

export default Component;
