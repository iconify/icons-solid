import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nq8h_zb-t.css';
import '../../css/s/sqgeu7_2a.css';
import '../../css/k/k1488cb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nq8h_zb-t"/><path class="sqgeu7_2a"/><path class="k1488cb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-x"} {...others} />);
}

export default Component;
