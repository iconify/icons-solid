import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy2u80b4g.css';
import '../../css/k/kk1809b4e.css';
import '../../css/z/zcl8rmben.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oy2u80b4g"/><path class="kk1809b4e"/><path class="zcl8rmben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:invoiceplane"} {...others} />);
}

export default Component;
