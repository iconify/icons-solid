import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hb6uocgia.css';
import '../../css/d/dvfmwi3vd.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="n1lsf0bnc"><path class="hb6uocgia"/><path class="dvfmwi3vd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:open-file"} {...others} />);
}

export default Component;
