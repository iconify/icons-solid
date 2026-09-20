import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bpoderofg {
  fill: currentColor;
  d: path("M20 22V2h2v20zM8 17v-3h10v3zm-6-7V7h16v3z");
}
</style><path class="bpoderofg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-horizontal-right-outline"} {...others} />);
}

export default Component;
