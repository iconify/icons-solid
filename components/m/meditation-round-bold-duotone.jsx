import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfx_j7n7f.css';
import '../../css/w/wh26rrx6c.css';
import '../../css/c/cs_t9bc7w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfx_j7n7f"/><path clip-rule="evenodd" class="wh26rrx6c"/><path class="cs_t9bc7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:meditation-round-bold-duotone"} {...others} />);
}

export default Component;
