import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qnnxl6bvc.css';
import '../../css/p/pu5v9vwih.css';
import '../../css/p/pmz80t_au.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="qnnxl6bvc"/><path class="pu5v9vwih"/><path class="pmz80t_au"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:wf"} {...others} />);
}

export default Component;
