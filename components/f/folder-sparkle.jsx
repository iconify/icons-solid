import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qkenlfbmv.css';
import '../../css/x/x877zbxcf.css';
import '../../css/u/uj-b80bxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qkenlfbmv"/><path class="x877zbxcf"/><path class="uj-b80bxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-sparkle"} {...others} />);
}

export default Component;
