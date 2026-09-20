import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uf-ug4bxu.css';
import '../../css/c/cn_ttacwb.css';
import '../../css/x/xgysb-b_a.css';
import '../../css/e/emhm7lbhr.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uf-ug4bxu"/><path class="cn_ttacwb"/><path class="xgysb-b_a"/><path class="emhm7lbhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:wealth-time-money"} {...others} />);
}

export default Component;
