import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1j9_jbah.css';
import '../../css/v/vw-odvbls.css';
import '../../css/z/zw-c3-bpc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e1j9_jbah"/><path clip-rule="evenodd" class="vw-odvbls"/><path class="zw-c3-bpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:alien-flat"} {...others} />);
}

export default Component;
