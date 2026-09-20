import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/b/bs1-8-ydm.css';
import '../../css/b/bxyseltqm.css';
import '../../css/u/u78lc2bnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="bs1-8-ydm"/><path class="bxyseltqm"/><path class="u78lc2bnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pined"} {...others} />);
}

export default Component;
