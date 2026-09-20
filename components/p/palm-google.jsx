import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aumw7gjtk.css';
import '../../css/v/vmgsxcbrd.css';
import '../../css/q/qw2avfbec.css';
import '../../css/f/f8ct0w4-p.css';
import '../../css/u/u6rdc5bjt.css';
import '../../css/y/y4q03jbai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="aumw7gjtk"/><path class="vmgsxcbrd"/><path class="qw2avfbec"/><path class="f8ct0w4-p"/><path class="u6rdc5bjt"/><path class="y4q03jbai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:palm-google"} {...others} />);
}

export default Component;
