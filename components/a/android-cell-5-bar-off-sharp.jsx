import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lghg58bri {
  fill: currentColor;
  d: path("M10.5 20v-6L.75 7.15l1.425-2.025l19.65 13.75l-1.425 2.05l-2.15-1.5V20h-3v-2.675L13.5 16.1V20zM1 20v-6h3v6zm4.75 0v-8h3v8zm12.5-6.675l-3-2.1V7h3zM23 16.65l-3-2.1V4h3z");
}
</style><path class="lghg58bri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:android-cell-5-bar-off-sharp"} {...others} />);
}

export default Component;
