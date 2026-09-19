import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sesk9obml.css';
import '../../css/y/yj--4g4yt.css';
import '../../css/j/jp5ylh46d.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sesk9obml"/><path class="yj--4g4yt"/><path class="jp5ylh46d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:no-entry-print"} {...others} />);
}

export default Component;
