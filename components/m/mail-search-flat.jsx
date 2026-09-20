import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vc_01lb6n.css';
import '../../css/w/w81nml9tu.css';
import '../../css/a/a-4tdvfpo.css';
import '../../css/q/qsvafo7sf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vc_01lb6n"/><path class="w81nml9tu"/><path class="a-4tdvfpo"/><path clip-rule="evenodd" class="qsvafo7sf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:mail-search-flat"} {...others} />);
}

export default Component;
