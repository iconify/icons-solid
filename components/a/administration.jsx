import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b--srcbma.css';
import '../../css/u/ua8krtbxj.css';
import '../../css/n/nhj-0wkkt.css';
import '../../css/i/ipochyqvc.css';
import '../../css/v/vkekufbza.css';
import '../../css/u/u4jpap09x.css';
import '../../css/l/ljnqb3bns.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7sr6ubzr"/><g class="d2kvgvbvc"><path class="b--srcbma"/><path class="ua8krtbxj"/><path class="nhj-0wkkt"/><path class="ipochyqvc"/><path class="vkekufbza"/><path class="u4jpap09x"/><path class="ljnqb3bns"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:administration"} {...others} />);
}

export default Component;
