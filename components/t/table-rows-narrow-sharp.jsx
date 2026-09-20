import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bhlc2hb4h {
  fill: currentColor;
  d: path("M4 15.635h16V12.5H4zM4 11.5h16V8.366H4zm0-4.134h16V4.23H4zM20 20V4zm-16-.23h16v-3.136H4z");
}
</style><path class="bhlc2hb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:table-rows-narrow-sharp"} {...others} />);
}

export default Component;
