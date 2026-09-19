import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/m/m_vk58bve.css';
import '../../css/m/m_9bs70wo.css';
import '../../css/z/zjedaobvf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="m_vk58bve"/><path class="m_9bs70wo"/><path class="zjedaobvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:camera-four"} {...others} />);
}

export default Component;
