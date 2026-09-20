import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.een9bablf {
  fill: currentColor;
  d: path("M11.385 19V6.25H6.019V5H18v1.25h-5.365V19z");
}
</style><path class="een9bablf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:title-outline-sharp"} {...others} />);
}

export default Component;
