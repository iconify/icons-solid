import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvyoy6b_p.css';
import '../../css/y/yexim4dcc.css';
import '../../css/v/v-e4uvn7p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="dvyoy6b_p"/><path class="yexim4dcc"/><path class="v-e4uvn7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ship-duo"} {...others} />);
}

export default Component;
