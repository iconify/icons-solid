import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyzz2jbxp.css';
import '../../css/s/sh9luzbpl.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/y/y957gubxe.css';
import '../../css/v/vmjs3ab-o.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yyzz2jbxp"/><path class="sh9luzbpl"/><g class="jn8qy4bru"><path class="y957gubxe"/><path class="vmjs3ab-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fish"} {...others} />);
}

export default Component;
