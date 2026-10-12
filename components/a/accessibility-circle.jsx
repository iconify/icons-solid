import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dh6y1nplp.css';
import '../../css/k/k-r6zjezk.css';
import '../../css/p/pp3jceyyl.css';
import '../../css/k/khdkximwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dh6y1nplp"/><path class="k-r6zjezk"/><circle transform="rotate(90 12 7.16)" class="pp3jceyyl"/><path class="khdkximwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:accessibility-circle"} {...others} />);
}

export default Component;
