import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2s1gywra.css';
import '../../css/l/lzoghccnd.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/wp9nfebcy.css';
import '../../css/k/kq1305ues.css';
import '../../css/a/a732xmrfu.css';

const viewBox = {"width":72,"height":72};
const content = `<rect class="g2s1gywra"/><path class="lzoghccnd"/><g class="jn8qy4bru"><path class="wp9nfebcy"/><path class="kq1305ues"/><path class="a732xmrfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:incoming-envelope"} {...others} />);
}

export default Component;
