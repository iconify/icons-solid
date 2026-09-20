import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tgg1qh8_p.css';
import '../../css/y/yus3zr2gn.css';
import '../../css/n/ng52b5k0e.css';
import '../../css/d/dcdv1rbmv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="tgg1qh8_p"/><path class="yus3zr2gn"/><path class="ng52b5k0e"/><path class="dcdv1rbmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:paint-palette"} {...others} />);
}

export default Component;
