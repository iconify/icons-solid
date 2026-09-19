import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzr2p1b8f.css';
import '../../css/a/aen1w6b6m.css';
import '../../css/v/vi3rgwb9r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xzr2p1b8f"/><path class="aen1w6b6m"/><path class="vi3rgwb9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:whitetouchtonephone"} {...others} />);
}

export default Component;
