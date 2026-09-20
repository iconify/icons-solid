import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sd1iribgt {
  fill: currentColor;
  d: path("M9 19v-4H5v-1h4v-4H5V9h4V5h1v4h4V5h1v4h4v1h-4v4h4v1h-4v4h-1v-4h-4v4zm1-5h4v-4h-4z");
}
</style><path class="sd1iribgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:grid-3x3-outline-sharp"} {...others} />);
}

export default Component;
