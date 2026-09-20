import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vtn6j--wx.css';
import '../../css/w/w3ie_cv-x.css';
import '../../css/d/d33ytxwqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vtn6j--wx"/><path class="w3ie_cv-x"/><path class="d33ytxwqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-circle-plus"} {...others} />);
}

export default Component;
