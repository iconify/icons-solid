import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p1nehyewa.css';
import '../../css/q/qe1p392fw.css';
import '../../css/e/e5d74-yqg.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p1nehyewa"/><path class="qe1p392fw"/><path class="e5d74-yqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:paper-clock-duotone"} {...others} />);
}

export default Component;
