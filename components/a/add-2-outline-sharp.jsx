import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p_0dfi6tt {
  fill: currentColor;
  d: path("M11.5 20v-7.5H4v-1h7.5V4h1v7.5H20v1h-7.5V20z");
}
</style><path class="p_0dfi6tt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:add-2-outline-sharp"} {...others} />);
}

export default Component;
