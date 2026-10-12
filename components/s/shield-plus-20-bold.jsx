import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gglz27bws.css';
import '../../css/b/btfpme1ph.css';
import '../../css/u/udj0ufbcm.css';
import '../../css/v/vn61y3npo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gglz27bws"/><path class="btfpme1ph"/><path class="udj0ufbcm"/><path class="vn61y3npo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shield-plus-20-bold"} {...others} />);
}

export default Component;
