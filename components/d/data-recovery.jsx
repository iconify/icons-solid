import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v7x7hozxq.css';
import '../../css/k/k5ala-n1a.css';
import '../../css/m/mwz9-fkga.css';
import '../../css/c/cjunxnb8y.css';
import '../../css/u/uu22-2bqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="v7x7hozxq"/><path class="k5ala-n1a"/><ellipse class="mwz9-fkga"/><path class="cjunxnb8y"/><path class="uu22-2bqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:data-recovery"} {...others} />);
}

export default Component;
