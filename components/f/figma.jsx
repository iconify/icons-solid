import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/p/plz506b5k.css';
import '../../css/l/ll0239alm.css';
import '../../css/q/qip9biq6h.css';
import '../../css/k/k-61y8b5k.css';
import '../../css/c/chjxmlbto.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="plz506b5k"/><path class="ll0239alm"/><path class="qip9biq6h"/><path class="k-61y8b5k"/><path class="chjxmlbto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:figma"} {...others} />);
}

export default Component;
