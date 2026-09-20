import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.npnnymbeu {
  fill: currentColor;
  d: path("M4 20V4h6.616v1H5v14h14v-5.615h1V20zm12-9V8h-3V7h3V4h1v3h3v1h-3v3z");
}
</style><path class="npnnymbeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:new-window-outline-sharp"} {...others} />);
}

export default Component;
