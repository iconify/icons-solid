import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ziazvb_0a {
  fill: currentColor;
  d: path("M4 20V4h16v16zm9.5-3.5h1v-9h-1v4h-3v-4h-1v5h4z");
}
</style><path class="ziazvb_0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:looks-4-sharp"} {...others} />);
}

export default Component;
