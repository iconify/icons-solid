import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/we-rgv_eb.css';
import '../../css/e/ergi8db9w.css';
import '../../css/t/tjlpedbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="we-rgv_eb"/><path class="ergi8db9w wm-k"/><path class="tjlpedbiu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:holly"} {...others} />);
}

export default Component;
