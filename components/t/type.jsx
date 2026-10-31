import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v2iagtbcw.css';
import '../../css/c/cdq-ahbxh.css';
import '../../css/c/cl4cfkfbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="v2iagtbcw wm-k"/><path class="cdq-ahbxh wm-a"/><path class="cl4cfkfbi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:type"} {...others} />);
}

export default Component;
