import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/h/h2x85ibqa.css';
import '../../css/o/oe88u2rpk.css';
import '../../css/h/ha_cvsbnj.css';
import '../../css/f/flowo9b7u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="h2x85ibqa"/><path class="oe88u2rpk"/><path class="ha_cvsbnj"/><path class="flowo9b7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:table-report"} {...others} />);
}

export default Component;
