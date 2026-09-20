import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l67a8ebfv {
  fill: currentColor;
  d: path("M5 21V3h14v18z");
}
</style><path class="l67a8ebfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:crop-portrait-sharp"} {...others} />);
}

export default Component;
