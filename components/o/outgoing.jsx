import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/n/nw_ovpblz.css';
import '../../css/c/cdzn3abuu.css';
import '../../css/j/jx5x25jbu.css';
import '../../css/a/adqhtzblp.css';
import '../../css/h/hrsn06v7j.css';
import '../../css/d/dvyvd8bif.css';
import '../../css/o/oixj-dbae.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="nw_ovpblz"/><path class="cdzn3abuu"/><path class="jx5x25jbu"/><path class="adqhtzblp"/><path class="hrsn06v7j"/><path class="dvyvd8bif"/><path class="oixj-dbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:outgoing"} {...others} />);
}

export default Component;
