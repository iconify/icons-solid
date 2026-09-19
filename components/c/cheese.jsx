import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qi9h__ikp.css';
import '../../css/h/hwt2tuv6e.css';
import '../../css/j/j_kppeg2r.css';
import '../../css/t/tfw8j54dv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qi9h__ikp"/><circle class="hwt2tuv6e"/><circle class="j_kppeg2r"/><circle class="tfw8j54dv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:cheese"} {...others} />);
}

export default Component;
