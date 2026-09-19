import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/stxidc2sn.css';
import '../../css/w/w1nvnyp9d.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="stxidc2sn"/><path class="w1nvnyp9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:forgejo-wordmark"} {...others} />);
}

export default Component;
