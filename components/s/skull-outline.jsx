import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmp9ddbhf.css';
import '../../css/k/kewmiqbmw.css';
import '../../css/d/dp4rysb_i.css';
import '../../css/m/mclf1pryu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pmp9ddbhf"/><circle class="kewmiqbmw"/><circle class="dp4rysb_i"/><path class="mclf1pryu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:skull-outline"} {...others} />);
}

export default Component;
