import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jdfzogbtf.css';
import '../../css/w/w7kp7k2kk.css';
import '../../css/q/qfwv274_r.css';
import '../../css/g/ga-n9actm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jdfzogbtf"/><path clip-rule="evenodd" class="w7kp7k2kk"/><path class="qfwv274_r"/><path class="ga-n9actm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:refresh-sparkle"} {...others} />);
}

export default Component;
