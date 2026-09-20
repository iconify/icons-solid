import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rgyi9mbut.css';
import '../../css/g/gp1zudvuo.css';
import '../../css/w/wv0e5-xpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rgyi9mbut"/><path class="gp1zudvuo"/><path class="wv0e5-xpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:database-network-1"} {...others} />);
}

export default Component;
