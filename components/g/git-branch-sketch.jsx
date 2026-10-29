import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x02njxbgw.css';
import '../../css/a/akcmo7byg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="x02njxbgw"/><path class="akcmo7byg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-branch-sketch"} {...others} />);
}

export default Component;
