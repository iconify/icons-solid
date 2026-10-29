import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/awymiybbk.css';
import '../../css/o/o-q2u_bjl.css';
import '../../css/i/ifnoigbzc.css';
import '../../css/z/z1za6xq1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="awymiybbk wm-k"/><path class="o-q2u_bjl"/><path class="ifnoigbzc"/><path class="wm-s z1za6xq1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:pichkari"} {...others} />);
}

export default Component;
