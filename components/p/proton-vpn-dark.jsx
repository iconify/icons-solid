import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s340dhbaz.css';
import '../../css/f/fr5_r8b7r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s340dhbaz"/><path class="fr5_r8b7r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proton-vpn-dark"} {...others} />);
}

export default Component;
