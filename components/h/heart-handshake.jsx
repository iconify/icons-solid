import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nq1haeo2l.css';
import '../../css/i/ie91ght0a.css';
import '../../css/z/z6gcuy8fu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="nq1haeo2l"/><path class="ie91ght0a"/><path class="z6gcuy8fu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:heart-handshake"} {...others} />);
}

export default Component;
