import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rjn-u5bcv.css';
import '../../css/s/sq212eb3t.css';
import '../../css/q/qyprq1f6b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="rjn-u5bcv"/><circle class="sq212eb3t"/><path class="qyprq1f6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:folder-block-one"} {...others} />);
}

export default Component;
