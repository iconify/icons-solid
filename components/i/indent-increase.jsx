import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/m6i-bjqet.css';
import '../../css/t/tann38b7v.css';
import '../../css/e/eg3i18brb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="m6i-bjqet wm-k"/><path class="tann38b7v wm-a"/><path class="eg3i18brb wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:indent-increase"} {...others} />);
}

export default Component;
