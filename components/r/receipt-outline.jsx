import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d0jgz8cvw {
  fill: currentColor;
  d: path("M4 20.77V3.23l1.27.962l1.346-.961l1.346.961l1.346-.961l1.346.961L12 3.231l1.346.961l1.346-.961l1.346.961l1.346-.961l1.347.961L20 3.231v17.538l-1.27-.961l-1.346.961l-1.346-.961l-1.346.961l-1.346-.961l-1.346.961l-1.346-.961l-1.346.961l-1.346-.961l-1.346.961l-1.347-.961zm2.5-4.885h11v-1h-11zm0-3.385h11v-1h-11zm0-3.384h11v-1h-11zM5 19.1h14V4.9H5zM5 4.9v14.2z");
}
</style><path class="d0jgz8cvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:receipt-outline"} {...others} />);
}

export default Component;
