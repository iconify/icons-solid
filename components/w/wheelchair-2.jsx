import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/e3dquf-sd.css';
import '../../css/h/hyzlm2cfs.css';
import '../../css/r/r1bflsb3t.css';
import '../../css/b/b1kia2rof.css';
import '../../css/u/uti7jclga.css';
import '../../css/u/u_15y7zfr.css';
import '../../css/o/op36j7vlv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="e3dquf-sd"/><path clip-rule="evenodd" class="hyzlm2cfs"/><path class="r1bflsb3t"/><path class="b1kia2rof"/><path class="uti7jclga"/><path class="u_15y7zfr"/><path class="op36j7vlv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:wheelchair-2"} {...others} />);
}

export default Component;
