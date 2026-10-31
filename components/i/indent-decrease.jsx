import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m6i-bjqet.css';
import '../../css/n/n9dic-1bb.css';
import '../../css/e/eg3i18brb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="m6i-bjqet wm-k"/><path class="n9dic-1bb wm-a"/><path class="eg3i18brb wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:indent-decrease"} {...others} />);
}

export default Component;
