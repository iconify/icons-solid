import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xkqkf1b6m.css';
import '../../css/y/yg66cgr8n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xkqkf1b6m"/><path class="yg66cgr8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:open-file-folder"} {...others} />);
}

export default Component;
