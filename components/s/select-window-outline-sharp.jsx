import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mbflgx3yd {
  fill: currentColor;
  d: path("M3 20.808v-11h4V3.192h14v11h-4v6.616zm1-1h12v-7H4zm13-6.616h3v-7H8v3.616h9z");
}
</style><path class="mbflgx3yd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:select-window-outline-sharp"} {...others} />);
}

export default Component;
