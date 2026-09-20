import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qucdmlbcc {
  fill: currentColor;
  d: path("M10 20h4v-1h-4zm-5 3V1h14v22zm2-7h10V6H7z");
}
</style><path class="qucdmlbcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:phone-android-sharp"} {...others} />);
}

export default Component;
