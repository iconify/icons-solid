import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lj0s6zbtx {
  fill: currentColor;
  d: path("M2 22v-2h20v2zm5-11V8h10v3zm0 6v-3h10v3z");
}
</style><path class="lj0s6zbtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-end"} {...others} />);
}

export default Component;
