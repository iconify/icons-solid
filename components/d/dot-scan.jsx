import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vs4z_3ftf.css';
import '../../css/l/ln-bxcwys.css';
import '../../css/w/wng9gxbpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vs4z_3ftf"/><path class="ln-bxcwys"/><path class="wng9gxbpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dot-scan"} {...others} />);
}

export default Component;
