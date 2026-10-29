import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wrc0wxb6i.css';
import '../../css/f/f2m41mplo.css';
import '../../css/h/h4g-2-v3f.css';
import '../../css/b/blsybkbrn.css';
import '../../css/f/fq738hp3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k wrc0wxb6i"/><path class="f2m41mplo wm-k"/><path class="h4g-2-v3f wm-k"/><path class="blsybkbrn wm-shine"/><path class="fq738hp3e wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:football"} {...others} />);
}

export default Component;
