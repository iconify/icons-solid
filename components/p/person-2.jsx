import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pxp2rab3b.css';
import '../../css/l/lcs_qdzgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="pxp2rab3b"/><path class="lcs_qdzgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:person-2"} {...others} />);
}

export default Component;
