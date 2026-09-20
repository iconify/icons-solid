import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nigx2wbdb.css';
import '../../css/h/htjepabmz.css';
import '../../css/q/qtkdtxbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="nigx2wbdb"/><path class="htjepabmz"/><path class="qtkdtxbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:date-today-light"} {...others} />);
}

export default Component;
