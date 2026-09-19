import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dedvhrbhm.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/p/psz3mjbhi.css';
import '../../css/s/srahqjbbo.css';
import '../../css/p/phggzbc5w.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGDGr6y1QO"><path class="dedvhrbhm"/></clipPath></defs><g clip-path="url(#SVGDGr6y1QO)" transform="translate(-52 118.4)scale(.7688)"><g class="nv9qcacyl"><path class="psz3mjbhi"/><path class="srahqjbbo"/><path class="phggzbc5w"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bj-1x1"} {...others} />);
}

export default Component;
