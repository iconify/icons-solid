import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwr8mbc3j.css';
import '../../css/s/sl0sqdbfa.css';
import '../../css/w/w5mozcc8a.css';
import '../../css/o/om93iibmb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vwr8mbc3j"/><path class="sl0sqdbfa"/><path class="w5mozcc8a"/><path class="om93iibmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:seedsync"} {...others} />);
}

export default Component;
