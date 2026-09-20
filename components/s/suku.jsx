import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uq6-h0bqj.css';
import '../../css/q/qx_8ccc_v.css';
import '../../css/h/h8q8hfbbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uq6-h0bqj"/><path class="qx_8ccc_v"/><path class="h8q8hfbbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:suku"} {...others} />);
}

export default Component;
