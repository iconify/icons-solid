import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qnns3cbcc.css';
import '../../css/s/s-y1y7b7x.css';
import '../../css/u/u60zwjb6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qnns3cbcc wm-k"/><path class="s-y1y7b7x wm-a"/><path class="u60zwjb6y wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:wrap-text"} {...others} />);
}

export default Component;
