import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/gnd7n2qlj.css';
import '../../css/e/e1b0kozst.css';
import '../../css/b/bjuz7p67a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="gnd7n2qlj"/><path class="e1b0kozst"/><path class="bjuz7p67a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:money-cash-bill-1"} {...others} />);
}

export default Component;
