import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_djld5do.css';
import '../../css/z/zw3_wr57r.css';
import '../../css/e/e2vl61blx.css';
import '../../css/q/qkm519b6x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d_djld5do wm-k"/><path class="wm-k zw3_wr57r"/><path class="e2vl61blx wm-a"/><path class="qkm519b6x wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:flask-conical"} {...others} />);
}

export default Component;
