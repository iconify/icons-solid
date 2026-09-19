import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dedvhrbhm.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/p/psz3mjbhi.css';
import '../../css/s/srahqjbbo.css';
import '../../css/p/phggzbc5w.css';

const viewBox = {"width":640,"height":480};
const content = `<defs><clipPath id="SVGDGr6y1QO"><path class="dedvhrbhm"/></clipPath></defs><g clip-path="url(#SVGDGr6y1QO)" transform="matrix(.961 0 0 .7207 -65 111)"><g class="nv9qcacyl"><path class="psz3mjbhi"/><path class="srahqjbbo"/><path class="phggzbc5w"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bj-4x3"} {...others} />);
}

export default Component;
