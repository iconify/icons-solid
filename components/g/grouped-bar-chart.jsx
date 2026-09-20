import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ji-ln4lds {
  fill: currentColor;
  d: path("M4 20V8h4v12zm5 0v-7h4v7zm7 0V4h4v16z");
}
</style><path class="ji-ln4lds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:grouped-bar-chart"} {...others} />);
}

export default Component;
