import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r-9nwwbxk.css';
import '../../css/i/i7-z0u50z.css';
import '../../css/p/p6hfr5jqi.css';
import '../../css/n/nyk-aacqc.css';
import '../../css/n/n9wuif3qm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r-9nwwbxk"/><path class="i7-z0u50z"/><path class="p6hfr5jqi"/><path class="nyk-aacqc"/><path class="n9wuif3qm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"grommet-icons:tictok"} {...others} />);
}

export default Component;
