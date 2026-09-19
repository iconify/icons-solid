import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fy1m_5xsk.css';
import '../../css/o/onrfcqbbo.css';
import '../../css/x/x2mv1qbxz.css';
import '../../css/i/i7q93plkz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="fy1m_5xsk"/><path class="onrfcqbbo"/><path class="x2mv1qbxz"/><path class="i7q93plkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flip-phone"} {...others} />);
}

export default Component;
