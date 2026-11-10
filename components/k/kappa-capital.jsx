import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/zvbcgcbmx.css';
import '../../css/p/pgp9h4h2p.css';
import '../../css/u/uecmhcb2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="zvbcgcbmx"/><path class="pgp9h4h2p"/><path class="uecmhcb2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:kappa-capital"} {...others} />);
}

export default Component;
