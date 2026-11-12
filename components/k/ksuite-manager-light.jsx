import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmg31mbbr.css';
import '../../css/y/yq4ktg_2p.css';
import '../../css/q/qxwq8bcbf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wmg31mbbr"/><path class="yq4ktg_2p"/><path class="qxwq8bcbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-manager-light"} {...others} />);
}

export default Component;
