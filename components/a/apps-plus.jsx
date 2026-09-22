import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xugo0db9o {
  fill: currentColor;
  d: path("M11 20h11v-7H11zm-9-9h10V4H2zm0 9h7v-7H2zm15-9V8h-3V6h3V3h2v3h3v2h-3v3z");
}
</style><path class="xugo0db9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:apps-plus"} {...others} />);
}

export default Component;
