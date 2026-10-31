import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s6q27qb3v.css';
import '../../css/l/lw3ir5-go.css';
import '../../css/c/cw36_6mco.css';
import '../../css/h/hnswhvb8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="s6q27qb3v"/><path class="lw3ir5-go wm-k"/><path class="cw36_6mco wm-a"/><path class="hnswhvb8m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chart-scatter"} {...others} />);
}

export default Component;
