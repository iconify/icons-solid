import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r7zlj28cq.css';
import '../../css/k/k49474t5f.css';
import '../../css/b/bc0l7zbbb.css';
import '../../css/c/ck0hbzbwt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="r7zlj28cq"/><path class="k49474t5f"/><path class="bc0l7zbbb"/><path class="ck0hbzbwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:zoom"} {...others} />);
}

export default Component;
