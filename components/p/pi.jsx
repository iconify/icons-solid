import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xipf1qcsp.css';
import '../../css/r/r4gai5bjn.css';
import '../../css/l/lf-g9db-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="xipf1qcsp"/><path class="r4gai5bjn"/><path class="lf-g9db-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:pi"} {...others} />);
}

export default Component;
