import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/ejmwdojph.css';
import '../../css/p/piqpuwbju.css';
import '../../css/w/w0nlbv9qm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ejmwdojph wm-shadow"/><path class="piqpuwbju wm-shadow"/><path class="w0nlbv9qm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:euro"} {...others} />);
}

export default Component;
