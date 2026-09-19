import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3qqrn2_d.css';
import '../../css/s/s7ccnp_vi.css';
import '../../css/r/rvkvl5b8b.css';
import '../../css/k/kvp5a_bkt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k3qqrn2_d"/><path class="s7ccnp_vi"/><path class="rvkvl5b8b"/><path class="kvp5a_bkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:floppydisk2"} {...others} />);
}

export default Component;
