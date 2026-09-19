import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y3ixbpb9r.css';
import '../../css/t/tgo66ccaj.css';
import '../../css/h/h2gov6jao.css';
import '../../css/w/wb7xiv68s.css';
import '../../css/a/aq5-9lu9j.css';
import '../../css/l/l36t8acsr.css';
import '../../css/i/ifvbzi5-s.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="y3ixbpb9r"/><path class="tgo66ccaj"/><path class="h2gov6jao"/><path class="wb7xiv68s"/><path class="aq5-9lu9j"/><path class="l36t8acsr"/><path class="ifvbzi5-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cupcake"} {...others} />);
}

export default Component;
