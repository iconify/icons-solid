import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/d/d4oe1undt.css';
import '../../css/g/gd_udhhcs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="d4oe1undt"/><path class="gd_udhhcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-line"} {...others} />);
}

export default Component;
