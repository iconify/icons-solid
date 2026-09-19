import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg9j1xb1g.css';
import '../../css/c/cft1j_bkt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xg9j1xb1g"/><path class="cft1j_bkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:moyai"} {...others} />);
}

export default Component;
