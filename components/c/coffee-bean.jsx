import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/nwaiuccce.css';
import '../../css/x/xbvmb9xet.css';
import '../../css/t/t1aakccoo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="nwaiuccce"/><path class="xbvmb9xet"/><path class="t1aakccoo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:coffee-bean"} {...others} />);
}

export default Component;
