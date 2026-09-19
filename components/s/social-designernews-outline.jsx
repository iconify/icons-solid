import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ho0-29b5y.css';
import '../../css/v/vhbe095-l.css';
import '../../css/x/xa-305ipw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ho0-29b5y"/><path class="vhbe095-l"/><path class="xa-305ipw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:social-designernews-outline"} {...others} />);
}

export default Component;
