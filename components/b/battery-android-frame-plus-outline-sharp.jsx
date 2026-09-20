import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v0smrnbzx {
  fill: currentColor;
  d: path("M1 18V6h15v2H3v8h13v2zm17-2v-3h-3v-2h3V8h2v3h3v2h-3v3zM4 15V9h9v6z");
}
</style><path class="v0smrnbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-android-frame-plus-outline-sharp"} {...others} />);
}

export default Component;
