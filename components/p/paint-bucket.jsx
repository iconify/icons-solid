import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/y/yuypcbbho.css';
import '../../css/d/dr_m_fb8a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="yuypcbbho"/><path class="dr_m_fb8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:paint-bucket"} {...others} />);
}

export default Component;
