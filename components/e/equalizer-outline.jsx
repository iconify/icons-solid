import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ztdk8i0xj {
  fill: currentColor;
  d: path("M5 19v-5.808h3V19zm5.5 0V5h3v14zm5.5 0V9.808h3V19z");
}
</style><path class="ztdk8i0xj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:equalizer-outline"} {...others} />);
}

export default Component;
