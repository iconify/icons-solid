import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ooy41dbxp.css';
import '../../css/z/z0g9z0bil.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="n1lsf0bnc"><path class="ooy41dbxp"/><path class="z0g9z0bil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:youtube"} {...others} />);
}

export default Component;
