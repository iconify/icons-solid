import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yad7robrr.css';
import '../../css/c/cy4gz4bsy.css';
import '../../css/r/raithdb3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yad7robrr"/><path class="cy4gz4bsy"/><path class="raithdb3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:cellular-network-wifi-4g"} {...others} />);
}

export default Component;
