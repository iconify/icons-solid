import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2pzyybat.css';
import '../../css/y/ylf10ib8g.css';
import '../../css/u/u-28vxq8s.css';
import '../../css/j/j9d0ksb9r.css';
import '../../css/i/i3xncmuba.css';
import '../../css/s/sn0-f5zcu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v2pzyybat"/><path class="ylf10ib8g"/><path class="u-28vxq8s"/><path class="j9d0ksb9r"/><path class="i3xncmuba"/><path class="sn0-f5zcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tie"} {...others} />);
}

export default Component;
