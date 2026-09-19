import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ux4toyink.css';
import '../../css/q/qhbsy9u2v.css';
import '../../css/z/zmr6ofc5s.css';
import '../../css/d/dkfjxvb3g.css';
import '../../css/r/rod9hkbdu.css';
import '../../css/l/l2hljobne.css';
import '../../css/d/dhmcb15um.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGoYMjOb7S"><g class="ft5dv1b6b"><path class="ux4toyink"/><path class="qhbsy9u2v"/><circle transform="rotate(135 42.193 40.071)" class="zmr6ofc5s"/><circle transform="rotate(135 40.072 42.192)" class="dkfjxvb3g"/><circle class="rod9hkbdu"/><circle class="l2hljobne"/><circle class="dhmcb15um"/></g></mask></defs><path mask="url(#SVGoYMjOb7S)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chicken-leg"} {...others} />);
}

export default Component;
