import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mskaodbsw.css';
import '../../css/w/wh1f9q4dk.css';
import '../../css/k/kj9mhnbey.css';
import '../../css/g/gsoczrbif.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="mskaodbsw"/><path clip-rule="evenodd" class="wh1f9q4dk"/><path clip-rule="evenodd" class="kj9mhnbey"/><path clip-rule="evenodd" class="gsoczrbif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:leaf-protect-flat"} {...others} />);
}

export default Component;
