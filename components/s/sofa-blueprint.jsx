import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e-n-_9zfe.css';
import '../../css/n/np7z6635y.css';
import '../../css/g/g2xclxbug.css';
import '../../css/h/hvb6btprc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="e-n-_9zfe wm-deco"/><path class="np7z6635y wm-deco"/><path class="g2xclxbug wm-deco"/><path class="hvb6btprc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sofa-blueprint"} {...others} />);
}

export default Component;
