import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fj-zf_bna {
  fill: currentColor;
  d: path("M2 20V4h20v16zm18-9V6H4v5zm-10 7h10v-5H10zm-6 0h4v-5H4z");
}
</style><path class="fj-zf_bna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-comfy-outline-sharp"} {...others} />);
}

export default Component;
