import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bjcdftdyi {
  fill: currentColor;
  d: path("M16 20v-7h4v7zm-6 0V4h4v16zm-6 0V9h4v11z");
}
</style><path class="bjcdftdyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bar-chart-outline-sharp"} {...others} />);
}

export default Component;
