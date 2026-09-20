import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iauzcee-u.css';
import '../../css/c/c6gs9jbec.css';
import '../../css/n/nrljxrvxd.css';
import '../../css/x/xqz_5lfhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iauzcee-u"/><path class="c6gs9jbec"/><path class="nrljxrvxd"/><path class="xqz_5lfhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:frame-broken"} {...others} />);
}

export default Component;
