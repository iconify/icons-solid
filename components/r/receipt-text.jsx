import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sk08csc7i.css';
import '../../css/k/kkztns4vk.css';
import '../../css/a/awrpmnbmi.css';
import '../../css/w/w302-hd8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="sk08csc7i"/><path class="kkztns4vk wm-shine"/><path class="awrpmnbmi wm-k"/><path class="w302-hd8l wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:receipt-text"} {...others} />);
}

export default Component;
