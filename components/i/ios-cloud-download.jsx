import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngp3jeu8h.css';
import '../../css/i/ixkzetvqb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ngp3jeu8h"/><path class="ixkzetvqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-cloud-download"} {...others} />);
}

export default Component;
