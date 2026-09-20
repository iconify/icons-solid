import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ei849gtbg {
  fill: currentColor;
  d: path("M7 10V4H2V2h20v2h-5v6zM2 22v-2h5v-6h10v6h5v2z");
}
</style><path class="ei849gtbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-stretch"} {...others} />);
}

export default Component;
