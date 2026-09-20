import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x8kn_5zmh.css';
import '../../css/z/zoah2g7wx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x8kn_5zmh"/><path class="zoah2g7wx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bottle-wine"} {...others} />);
}

export default Component;
