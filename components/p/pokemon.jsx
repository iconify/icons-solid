import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mylx29b0f.css';
import '../../css/o/oksi2ib1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="mylx29b0f"/><path class="oksi2ib1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pokemon"} {...others} />);
}

export default Component;
