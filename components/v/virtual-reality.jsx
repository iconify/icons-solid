import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/gxtam2buy.css';
import '../../css/z/z4id7zb3y.css';
import '../../css/u/u-1zfcexj.css';
import '../../css/j/jzzf7gbpu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="gxtam2buy"/><path class="z4id7zb3y"/><path class="u-1zfcexj"/><path class="jzzf7gbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:virtual-reality"} {...others} />);
}

export default Component;
