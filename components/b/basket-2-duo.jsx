import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g0pt84-dy.css';
import '../../css/w/wsr3lo6fe.css';
import '../../css/b/bffr92bsz.css';
import '../../css/j/j-qjlbbxq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="g0pt84-dy"/><path class="wsr3lo6fe"/><path class="bffr92bsz"/><path class="j-qjlbbxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:basket-2-duo"} {...others} />);
}

export default Component;
