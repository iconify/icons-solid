import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w-ws7tr1v.css';
import '../../css/r/rg2p71b9u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w-ws7tr1v"/><path class="rg2p71b9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fedora"} {...others} />);
}

export default Component;
