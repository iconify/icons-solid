import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oubpnvbpe.css';
import '../../css/a/a96xavv0s.css';
import '../../css/p/p1rag-8mt.css';
import '../../css/n/nhroi0kik.css';
import '../../css/b/blq8cacjl.css';
import '../../css/m/mwkxbzc_b.css';
import '../../css/p/prwmfeb7x.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="oubpnvbpe"/><path class="a96xavv0s"/><g class="p1rag-8mt"><path class="nhroi0kik"/><path class="blq8cacjl"/><path class="mwkxbzc_b"/><circle class="prwmfeb7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:transgender-symbol"} {...others} />);
}

export default Component;
