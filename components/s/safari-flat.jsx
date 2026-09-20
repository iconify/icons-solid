import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9fh2erkx.css';
import '../../css/t/tx20y6vne.css';
import '../../css/x/x8iqiy3dj.css';
import '../../css/w/wvduwlblc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="t9fh2erkx"/><path clip-rule="evenodd" class="tx20y6vne"/><path class="x8iqiy3dj"/><path class="wvduwlblc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:safari-flat"} {...others} />);
}

export default Component;
