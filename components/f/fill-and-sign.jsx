import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xgkzzfbsj.css';
import '../../css/d/d0n_v7bsp.css';
import '../../css/c/cyyy03bfw.css';
import '../../css/e/eixdubbhy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="xgkzzfbsj"/><path class="d0n_v7bsp"/><path class="cyyy03bfw"/><path class="eixdubbhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fill-and-sign"} {...others} />);
}

export default Component;
