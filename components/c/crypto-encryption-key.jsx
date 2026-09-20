import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/yg-_csbbd.css';
import '../../css/u/uf3cs3z-q.css';
import '../../css/x/xggn96_qh.css';
import '../../css/a/ay2291bph.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="yg-_csbbd"/><path class="uf3cs3z-q"/><path class="xggn96_qh"/><path class="ay2291bph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:crypto-encryption-key"} {...others} />);
}

export default Component;
