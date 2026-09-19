import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n6onabcla.css';
import '../../css/m/md286fbip.css';
import '../../css/t/t_vxkebwj.css';
import '../../css/n/nnhhj0b3v.css';
import '../../css/z/zt91rkbak.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="n6onabcla"/><g class="md286fbip"><path class="t_vxkebwj"/><path class="nnhhj0b3v"/><path class="zt91rkbak"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:aywa"} {...others} />);
}

export default Component;
