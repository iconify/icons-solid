import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pybti58qc.css';
import '../../css/h/hq-5njbjh.css';
import '../../css/f/f601ckbom.css';
import '../../css/u/ukvmc8bfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pybti58qc"/><path class="hq-5njbjh"/><path class="f601ckbom"/><circle class="ukvmc8bfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medical-kit-broken"} {...others} />);
}

export default Component;
