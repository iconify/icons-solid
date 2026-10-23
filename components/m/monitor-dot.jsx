import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yu2xnfbuu.css';
import '../../css/y/yj4kln7sg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yu2xnfbuu"/><path class="yj4kln7sg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:monitor-dot"} {...others} />);
}

export default Component;
