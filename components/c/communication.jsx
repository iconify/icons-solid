import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/n/n1zp82_3a.css';
import '../../css/p/ppon6yb-o.css';
import '../../css/e/eq89f1p2o.css';
import '../../css/d/d2zuq-40t.css';
import '../../css/n/ndbfaob2w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="n1zp82_3a"/><path class="ppon6yb-o"/><path class="eq89f1p2o"/><path class="d2zuq-40t"/><path class="ndbfaob2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:communication"} {...others} />);
}

export default Component;
