import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mfgbmlb5h.css';
import '../../css/r/r86t6xbpa.css';
import '../../css/d/dx7k_3bea.css';
import '../../css/e/e1c562ban.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="mfgbmlb5h"/><path class="r86t6xbpa wm-k"/><path class="dx7k_3bea wm-a"/><path class="e1c562ban wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:atom"} {...others} />);
}

export default Component;
