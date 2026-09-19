import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q3rbtacxl.css';
import '../../css/b/bji81ibws.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="q3rbtacxl"/><path class="bji81ibws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:message-success"} {...others} />);
}

export default Component;
