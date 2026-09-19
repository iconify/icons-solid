import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/b/blz16obrf.css';
import '../../css/w/wtkpckvgx.css';
import '../../css/p/pud3dsfvs.css';
import '../../css/o/omnhh-bgl.css';
import '../../css/a/ai4jrgoca.css';
import '../../css/k/k061z977v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="blz16obrf"/><path class="wtkpckvgx"/><path class="pud3dsfvs"/><path class="omnhh-bgl"/><path class="ai4jrgoca"/><path class="k061z977v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:table-file"} {...others} />);
}

export default Component;
