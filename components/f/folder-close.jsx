import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pt3ayibtb.css';
import '../../css/x/x3fr-qpgw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="pt3ayibtb"/><path class="x3fr-qpgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:folder-close"} {...others} />);
}

export default Component;
