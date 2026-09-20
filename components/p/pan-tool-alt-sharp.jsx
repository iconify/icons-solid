import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xt5l1rbts {
  fill: currentColor;
  d: path("M8.525 21L1.15 11.925l1.775-1.7L7 13.075V2h2v9h2V6h2v5h2V7h2v4h2V9h2v12z");
}
</style><path class="xt5l1rbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pan-tool-alt-sharp"} {...others} />);
}

export default Component;
