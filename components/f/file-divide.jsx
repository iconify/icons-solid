import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3vmxny-a.css';
import '../../css/b/b9hbrlbiz.css';
import '../../css/y/yg4a90bou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w3vmxny-a"/><path class="b9hbrlbiz"/><path class="yg4a90bou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-divide"} {...others} />);
}

export default Component;
