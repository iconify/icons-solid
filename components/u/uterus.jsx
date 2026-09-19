import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/n/nwlhoubli.css';
import '../../css/b/bwz1flb7e.css';
import '../../css/z/zpj25rudd.css';
import '../../css/o/ov1f_4e4x.css';
import '../../css/s/szutbibdk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="nwlhoubli"/><path class="bwz1flb7e"/><path class="zpj25rudd"/><path class="ov1f_4e4x"/><path class="szutbibdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:uterus"} {...others} />);
}

export default Component;
