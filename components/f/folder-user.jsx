import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qgamwnzxg.css';
import '../../css/k/kexhmftrf.css';
import '../../css/r/rbg0ikktb.css';
import '../../css/l/ldwvkebez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qgamwnzxg"/><path class="kexhmftrf"/><path class="rbg0ikktb"/><path class="ldwvkebez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-user"} {...others} />);
}

export default Component;
