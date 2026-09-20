import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/elkemnoca.css';
import '../../css/e/euqgn5mmt.css';
import '../../css/e/e14c7vbab.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="elkemnoca"/><path class="euqgn5mmt"/><path clip-rule="evenodd" class="e14c7vbab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:no-smaking-area-flat"} {...others} />);
}

export default Component;
