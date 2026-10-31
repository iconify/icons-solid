import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lxh3udb_b.css';
import '../../css/y/yvye1mqze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="lxh3udb_b wm-k"/><path class="wm-a yvye1mqze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ship-gloss"} {...others} />);
}

export default Component;
