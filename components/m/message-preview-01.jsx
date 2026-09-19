import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dz9ro_bbx.css';
import '../../css/j/jsjamhb6g.css';
import '../../css/r/rxdutob5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dz9ro_bbx"/><path class="jsjamhb6g"/><path class="rxdutob5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-preview-01"} {...others} />);
}

export default Component;
