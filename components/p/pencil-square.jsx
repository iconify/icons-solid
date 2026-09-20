import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/i8f1h8bpi.css';
import '../../css/u/ucpiun25d.css';
import '../../css/t/teu317bgw.css';
import '../../css/y/yz6-n_rdv.css';
import '../../css/l/lmrmygbvs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="i8f1h8bpi"/><path class="ucpiun25d"/><path class="teu317bgw"/><path class="yz6-n_rdv"/><path class="lmrmygbvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pencil-square"} {...others} />);
}

export default Component;
