import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bpf20z_qq {
  fill: currentColor;
  d: path("M6 10h9V7H6zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="bpf20z_qq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:subheader-outline-sharp"} {...others} />);
}

export default Component;
