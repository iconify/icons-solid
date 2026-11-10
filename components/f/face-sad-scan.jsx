import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vs4z_3ftf.css';
import '../../css/l/ln-bxcwys.css';
import '../../css/p/pdf-ob65e.css';
import '../../css/w/wreekxbee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vs4z_3ftf"/><path class="ln-bxcwys"/><path class="pdf-ob65e"/><path class="wreekxbee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-sad-scan"} {...others} />);
}

export default Component;
