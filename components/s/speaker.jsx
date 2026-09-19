import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o79s8nbyt.css';
import '../../css/t/t-rxw92sk.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="o79s8nbyt"/><path class="t-rxw92sk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:speaker"} {...others} />);
}

export default Component;
