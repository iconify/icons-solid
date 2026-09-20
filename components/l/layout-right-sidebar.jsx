import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qxgp30ily.css';
import '../../css/z/zoo19mzfi.css';
import '../../css/r/rg-j--brg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="qxgp30ily"/><path class="zoo19mzfi"/><path class="rg-j--brg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:layout-right-sidebar"} {...others} />);
}

export default Component;
