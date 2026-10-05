import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/rbrodccbq.css';
import '../../css/s/slyys2amg.css';
import '../../css/l/lvxf_-e5z.css';
import '../../css/s/sn229gegs.css';
import '../../css/n/nqds4ewfi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="rbrodccbq"/><path class="slyys2amg"/><path class="lvxf_-e5z"/><path class="sn229gegs"/><path class="nqds4ewfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:book"} {...others} />);
}

export default Component;
