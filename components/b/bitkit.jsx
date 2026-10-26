import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l_e55p-ia.css';
import '../../css/y/yizg1nbwt.css';

const viewBox = {"width":256,"height":256};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l_e55p-ia"/><path class="yizg1nbwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:bitkit"} {...others} />);
}

export default Component;
