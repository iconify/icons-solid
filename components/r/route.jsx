import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u_ne8n15q.css';
import '../../css/o/odnmdzi_x.css';
import '../../css/d/dorpla9vi.css';
import '../../css/x/xev9_4bdv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="u_ne8n15q"/><path class="odnmdzi_x wm-k"/><path class="dorpla9vi wm-a"/><path class="wm-deco xev9_4bdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:route"} {...others} />);
}

export default Component;
