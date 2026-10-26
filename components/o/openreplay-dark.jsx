import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/l/l9wbs_y1i.css';
import '../../css/b/bjwamubhq.css';

const viewBox = {"width":30,"height":30};
const content = `<g class="n1mjunbsu"><path class="l9wbs_y1i"/><path class="bjwamubhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:openreplay-dark"} {...others} />);
}

export default Component;
