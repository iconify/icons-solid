import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h1mcx-bxm.css';
import '../../css/m/me8uw8b3d.css';
import '../../css/t/tbhzdihwz.css';
import '../../css/x/xouilc46a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h1mcx-bxm"/><path clip-rule="evenodd" class="me8uw8b3d"/><path clip-rule="evenodd" class="tbhzdihwz"/><path clip-rule="evenodd" class="xouilc46a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:printer-flat"} {...others} />);
}

export default Component;
