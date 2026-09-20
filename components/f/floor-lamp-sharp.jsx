import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z8uirzysi {
  fill: currentColor;
  d: path("M11 19v-8H4.65l2.775-9h9.15l2.775 9H13v8zm-3 3v-2h8v2z");
}
</style><path class="z8uirzysi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:floor-lamp-sharp"} {...others} />);
}

export default Component;
