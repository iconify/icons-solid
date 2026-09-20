import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h2ebchlrj.css';
import '../../css/b/bmlc_mb5j.css';
import '../../css/h/hoic_wbnl.css';
import '../../css/k/kcfesybjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="h2ebchlrj"/><path class="bmlc_mb5j"/><path class="hoic_wbnl"/><path class="kcfesybjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cellular-network-wifi-5g"} {...others} />);
}

export default Component;
