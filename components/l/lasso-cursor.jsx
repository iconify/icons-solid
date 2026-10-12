import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0dnrlbyk.css';
import '../../css/z/zm31xdjdj.css';
import '../../css/o/ojo7plb8y.css';
import '../../css/y/yq3p28b3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t0dnrlbyk"/><path clip-rule="evenodd" class="zm31xdjdj"/><path class="ojo7plb8y"/><path class="yq3p28b3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lasso-cursor"} {...others} />);
}

export default Component;
