import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uy1occc3d.css';
import '../../css/h/h4kcnxt2y.css';
import '../../css/q/qla2qka_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uy1occc3d"/><path class="h4kcnxt2y"/><path class="qla2qka_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smart-watch-circle-graph-line"} {...others} />);
}

export default Component;
