import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frn1yib1k.css';
import '../../css/y/y47svzb0n.css';
import '../../css/h/h6c82bcwk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="frn1yib1k"/><path class="y47svzb0n"/><path class="h6c82bcwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-settings-strong"} {...others} />);
}

export default Component;
