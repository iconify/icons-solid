import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfzh94b8z.css';
import '../../css/o/odjrbuxck.css';
import '../../css/y/yqwlv8s8f.css';
import '../../css/v/vh4lpy7mc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jfzh94b8z"/><path class="odjrbuxck"/><path class="yqwlv8s8f"/><path class="vh4lpy7mc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-restore"} {...others} />);
}

export default Component;
