import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/muzo2ibhl.css';
import '../../css/y/yjpa273dk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="muzo2ibhl"/><path class="yjpa273dk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:notification-02"} {...others} />);
}

export default Component;
