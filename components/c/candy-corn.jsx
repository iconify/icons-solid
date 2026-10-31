import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cgz3rdpjh.css';
import '../../css/n/ntdz_cbid.css';
import '../../css/s/sx8dqs8pe.css';
import '../../css/d/dxfilmbdx.css';
import '../../css/a/a4vjoxyvs.css';
import '../../css/z/z6lxyjbfg.css';
import '../../css/o/o7v5vbcxo.css';
import '../../css/c/c-tl4j0zc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="cgz3rdpjh"/><path class="ntdz_cbid"/><path class="sx8dqs8pe wm-shine"/><path class="dxfilmbdx wm-k"/><path class="a4vjoxyvs wm-a"/><path class="z6lxyjbfg"/><path class="o7v5vbcxo"/><path class="c-tl4j0zc wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:candy-corn"} {...others} />);
}

export default Component;
