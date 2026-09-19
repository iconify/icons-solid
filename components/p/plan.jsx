import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/du5xobhgo.css';
import '../../css/h/hz2zgmbpt.css';
import '../../css/h/hu_nuxbxh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="du5xobhgo"/><path class="hz2zgmbpt"/><path class="hu_nuxbxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:plan"} {...others} />);
}

export default Component;
