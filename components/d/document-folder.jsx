import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/d/drjnalbik.css';
import '../../css/g/g98q0dbmh.css';
import '../../css/j/jqjx1ob6l.css';
import '../../css/d/ddi291rxc.css';
import '../../css/x/xwg81gcfv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="drjnalbik"/><path class="g98q0dbmh"/><path class="jqjx1ob6l"/><path class="ddi291rxc"/><path class="xwg81gcfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:document-folder"} {...others} />);
}

export default Component;
