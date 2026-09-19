import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y-1ye3yek.css';
import '../../css/r/r7waqsbob.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="y-1ye3yek"/><path class="r7waqsbob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:powerswitch"} {...others} />);
}

export default Component;
