import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znxc6sbtg.css';
import '../../css/y/y3-35o4du.css';
import '../../css/w/w9nqp9_mn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="znxc6sbtg"/><rect class="y3-35o4du"/><path class="w9nqp9_mn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:battery-medium"} {...others} />);
}

export default Component;
