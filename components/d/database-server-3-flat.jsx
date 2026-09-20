import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uuxhctyax.css';
import '../../css/a/aexv_sc4a.css';
import '../../css/a/aw43z7uas.css';
import '../../css/h/h2um-nb9c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uuxhctyax"/><path class="aexv_sc4a"/><path clip-rule="evenodd" class="aw43z7uas"/><path class="h2um-nb9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:database-server-3-flat"} {...others} />);
}

export default Component;
