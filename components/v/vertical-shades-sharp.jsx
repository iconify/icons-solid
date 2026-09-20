import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bnkr6kbks {
  fill: currentColor;
  d: path("M3 20v-1h2V4h14v15h2v1zm6.75-1h4.5V5h-4.5z");
}
</style><path class="bnkr6kbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:vertical-shades-sharp"} {...others} />);
}

export default Component;
