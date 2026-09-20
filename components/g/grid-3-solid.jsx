import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gffv_7bvf.css';
import '../../css/m/myqldbf8k.css';
import '../../css/w/wvj3-xbtm.css';
import '../../css/g/gm6r0aciw.css';

const viewBox = {"width":24,"height":24};
const content = `<g fill-opacity="0" class="gffv_7bvf"><path class="myqldbf8k"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="12;0"/><animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.4s" to="1"/></path><path stroke-dashoffset="12" class="wvj3-xbtm"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" to="0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" to="1"/></path><path stroke-dashoffset="12" class="gm6r0aciw"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" to="0"/><animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.4s" to="1"/></path></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:grid-3-solid"} {...others} />);
}

export default Component;
