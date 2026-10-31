import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rsxux02nf.css';
import '../../css/c/chfexdi1f.css';
import '../../css/b/besqxsfvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="rsxux02nf wm-k"/><path class="chfexdi1f wm-a"/><path class="besqxsfvw wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chevron-first"} {...others} />);
}

export default Component;
