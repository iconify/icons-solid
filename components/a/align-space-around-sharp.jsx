import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jcu0-pppt {
  fill: currentColor;
  d: path("M2 4V2h20v2zm0 18v-2h20v2zM7 9V6h10v3zm0 9v-3h10v3z");
}
</style><path class="jcu0-pppt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-space-around-sharp"} {...others} />);
}

export default Component;
