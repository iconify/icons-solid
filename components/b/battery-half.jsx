import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pzauvpb_u.css';
import '../../css/s/spaiyjxac.css';
import '../../css/l/lq2ydebmf.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="pzauvpb_u"/><path class="spaiyjxac"/><path class="lq2ydebmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:battery-half"} {...others} />);
}

export default Component;
