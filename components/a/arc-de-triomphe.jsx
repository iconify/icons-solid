import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/bpt9lrbgr.css';
import '../../css/l/lz8ird8sd.css';
import '../../css/i/it49f1h0r.css';
import '../../css/v/vekm0acvh.css';
import '../../css/b/bybdpytfl.css';
import '../../css/y/ycqy4tm4x.css';
import '../../css/z/zs569roct.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="bpt9lrbgr"/><path class="lz8ird8sd"/><path class="it49f1h0r"/><path class="vekm0acvh"/><path class="bybdpytfl"/><path class="ycqy4tm4x"/><path class="zs569roct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:arc-de-triomphe"} {...others} />);
}

export default Component;
