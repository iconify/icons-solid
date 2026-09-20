import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nkh5-vxws.css';
import '../../css/s/sj3c-dp5f.css';
import '../../css/x/xqvm7kvtl.css';
import '../../css/b/bhf44_bvt.css';
import '../../css/w/wrri26bwq.css';
import '../../css/d/drgoi2jbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="nkh5-vxws"/><path class="sj3c-dp5f"/><path class="xqvm7kvtl"/><path class="bhf44_bvt"/><path class="wrri26bwq"/><path class="drgoi2jbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:pydanticai"} {...others} />);
}

export default Component;
