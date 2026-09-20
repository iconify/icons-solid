import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yggnu0s6i.css';
import '../../css/l/l1w-8dd4c.css';
import '../../css/y/yrg9z8bbc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yggnu0s6i"/><path class="l1w-8dd4c"/><path class="yrg9z8bbc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:business-metaphor-boat-success"} {...others} />);
}

export default Component;
