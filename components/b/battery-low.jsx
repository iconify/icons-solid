import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nafxflutk.css';
import '../../css/y/y3-35o4du.css';
import '../../css/k/ka8br8bmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nafxflutk"/><rect class="y3-35o4du"/><path class="ka8br8bmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:battery-low"} {...others} />);
}

export default Component;
