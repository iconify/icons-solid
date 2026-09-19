import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z9n2k_b-v.css';
import '../../css/r/r0wuxo4xj.css';
import '../../css/p/pabn9aboq.css';
import '../../css/q/qwujpbv7u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="bed-outiline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="z9n2k_b-v"/><path class="r0wuxo4xj"/><path class="pabn9aboq"/><path class="qwujpbv7u"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:bed-outiline"} {...others} />);
}

export default Component;
