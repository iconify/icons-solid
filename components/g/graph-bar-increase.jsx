import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2voyuaco.css';
import '../../css/l/li0xiwdxq.css';
import '../../css/n/npys77r9r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="v2voyuaco"/><path class="li0xiwdxq"/><path class="npys77r9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:graph-bar-increase"} {...others} />);
}

export default Component;
