import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ei3ecxn7v.css';
import '../../css/p/p7jf1narr.css';
import '../../css/x/xxnh8zsaj.css';
import '../../css/a/axmxvrb_k.css';
import '../../css/s/s5mygkbjo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ei3ecxn7v"/><path class="p7jf1narr"/><path class="xxnh8zsaj"/><path class="axmxvrb_k"/><path class="s5mygkbjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:mac-signal-pop"} {...others} />);
}

export default Component;
