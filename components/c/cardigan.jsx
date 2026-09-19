import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tgwo95v5y.css';
import '../../css/b/bvegeppnc.css';
import '../../css/s/sxbf-9b_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tgwo95v5y"/><path class="bvegeppnc"/><path class="sxbf-9b_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cardigan"} {...others} />);
}

export default Component;
