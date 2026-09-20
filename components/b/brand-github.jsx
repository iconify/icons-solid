import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pf0nk9bfs.css';
import '../../css/l/lke1m2vop.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pf0nk9bfs"/><path class="lke1m2vop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:brand-github"} {...others} />);
}

export default Component;
