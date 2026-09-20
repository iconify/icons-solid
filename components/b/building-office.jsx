import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/ij98ji3ho.css';
import '../../css/r/rc4gxnxlt.css';
import '../../css/q/qsbib5l9t.css';
import '../../css/a/aj21x-b7i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ij98ji3ho"/><path class="rc4gxnxlt"/><path class="qsbib5l9t"/><path class="aj21x-b7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:building-office"} {...others} />);
}

export default Component;
