import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r_fn6mq7v {
  fill: currentColor;
  d: path("M3 21v-6h8v6zm10 0v-6h8v6zM3 13V3h18v10z");
}
</style><path class="r_fn6mq7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tile-large"} {...others} />);
}

export default Component;
