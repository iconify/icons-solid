import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zr_lbtkpu.css';
import '../../css/w/wx_97fbvz.css';
import '../../css/o/o-mxp99xh.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zr_lbtkpu"/><path class="wx_97fbvz"/><path class="o-mxp99xh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:file"} {...others} />);
}

export default Component;
