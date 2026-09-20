import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bgzt_ibix.css';
import '../../css/z/zuqx6186b.css';
import '../../css/f/flah-ib-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bgzt_ibix"/><path class="zuqx6186b"/><path class="flah-ib-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:cellular-network-wifi-3g"} {...others} />);
}

export default Component;
