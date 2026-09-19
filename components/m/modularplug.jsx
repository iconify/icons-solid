import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f9vy69hcl.css';
import '../../css/a/akjzcpb7k.css';
import '../../css/r/rtgm_3bco.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="f9vy69hcl"/><path class="akjzcpb7k"/><path class="rtgm_3bco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:modularplug"} {...others} />);
}

export default Component;
