import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvjr5w14b.css';
import '../../css/l/l_b7ufbnd.css';
import '../../css/c/cre601bev.css';
import '../../css/i/io-ffjb-u.css';
import '../../css/z/zeqvf597f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qvjr5w14b"/><path class="l_b7ufbnd"/><path class="cre601bev"/><path class="io-ffjb-u"/><path class="zeqvf597f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-excel-light"} {...others} />);
}

export default Component;
