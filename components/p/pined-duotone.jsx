import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3kinwbwn.css';
import '../../css/h/h_cj09bol.css';
import '../../css/b/bxyseltqm.css';
import '../../css/u/u78lc2bnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j3kinwbwn"><path class="h_cj09bol"/><path class="bxyseltqm"/><path class="u78lc2bnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pined-duotone"} {...others} />);
}

export default Component;
