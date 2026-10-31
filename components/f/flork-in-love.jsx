import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v96czrbjl.css';
import '../../css/h/htyshjb0q.css';
import '../../css/u/u97n1vb2x.css';
import '../../css/v/vqd3-fbzt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="v96czrbjl"/><path class="htyshjb0q"/><circle transform="rotate(18.176 10.698 9.814)" class="u97n1vb2x"/><path clip-rule="evenodd" class="vqd3-fbzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:flork-in-love"} {...others} />);
}

export default Component;
