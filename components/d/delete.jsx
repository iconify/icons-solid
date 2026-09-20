import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftfbryb0n.css';
import '../../css/p/pfc59dpqc.css';
import '../../css/u/ufnun_9wh.css';
import '../../css/u/ucp_klm1l.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ftfbryb0n"/><path class="pfc59dpqc"/><path class="ufnun_9wh"/><path class="ucp_klm1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:delete"} {...others} />);
}

export default Component;
