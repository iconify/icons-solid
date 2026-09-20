import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dd3c0-b0p {
  fill: currentColor;
  d: path("M1 18V6h15v3h-3v6h3v3zm17-2v-3h-3v-2h3V8h2v3h3v2h-3v3z");
}
</style><path class="dd3c0-b0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-android-plus-sharp"} {...others} />);
}

export default Component;
