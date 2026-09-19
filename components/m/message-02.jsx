import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wb-u0qbgn.css';
import '../../css/w/wbq_xk3gw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wb-u0qbgn"/><path class="wbq_xk3gw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-02"} {...others} />);
}

export default Component;
