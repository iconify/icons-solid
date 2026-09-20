import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xenwn65bw.css';
import '../../css/p/pb3h_qhil.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xenwn65bw"/><ellipse class="pb3h_qhil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dolibarr"} {...others} />);
}

export default Component;
