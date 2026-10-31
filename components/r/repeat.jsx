import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/ndjr08ioc.css';
import '../../css/o/otuq7d52p.css';
import '../../css/g/ghcq3vt4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ndjr08ioc wm-k"/><path class="otuq7d52p wm-a"/><path class="ghcq3vt4r wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:repeat"} {...others} />);
}

export default Component;
