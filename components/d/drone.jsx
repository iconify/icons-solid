import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dtesxbj3y.css';
import '../../css/a/amlmg7b2n.css';
import '../../css/h/hr07nwq7t.css';
import '../../css/t/t96a34een.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dtesxbj3y"/><path class="amlmg7b2n"/><path class="hr07nwq7t wm-k"/><path class="t96a34een wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:drone"} {...others} />);
}

export default Component;
