import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xvd3pkbjc.css';
import '../../css/t/tek6cfbxc.css';
import '../../css/t/t32bs5kub.css';
import '../../css/c/c-u1scctq.css';
import '../../css/u/uzcaltb9w.css';
import '../../css/n/nd713rb6a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path clip-rule="evenodd" class="xvd3pkbjc"/><path class="tek6cfbxc"/><path class="t32bs5kub"/><path class="c-u1scctq"/><path class="uzcaltb9w"/><path class="nd713rb6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clear"} {...others} />);
}

export default Component;
