import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fhw73dukv {
  fill: currentColor;
  d: path("M4 20v-3h4v3zm0-4v-4h4v4zm0-5V4h4v7zm6 9v-7h4v7zm0-8V8h4v4zm0-5V4h4v3zm6 13v-2h4v2zm0-3v-4h4v4zm0-5V4h4v8z");
}
</style><path class="fhw73dukv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:full-stacked-bar-chart-outline-sharp"} {...others} />);
}

export default Component;
