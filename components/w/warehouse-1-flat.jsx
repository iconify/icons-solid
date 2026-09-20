import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1_apsxgg.css';
import '../../css/c/c-y480ica.css';
import '../../css/t/txnm4xb_j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q1_apsxgg"/><path clip-rule="evenodd" class="c-y480ica"/><path class="txnm4xb_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:warehouse-1-flat"} {...others} />);
}

export default Component;
