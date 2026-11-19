import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wedb-cbmi.css';
import '../../css/p/pqorn4b5k.css';
import '../../css/w/wx8o9908t.css';
import '../../css/y/y0qdzg8ij.css';
import '../../css/n/n25r4h2lp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wedb-cbmi"/><path class="pqorn4b5k"/><path class="wx8o9908t"/><path class="y0qdzg8ij"/><path class="n25r4h2lp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:team-plus"} {...others} />);
}

export default Component;
