import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvbv_hdmb.css';
import '../../css/d/depymqbpz.css';
import '../../css/x/x2jhonbsw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xvbv_hdmb"/><path class="depymqbpz"/><path class="x2jhonbsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:postalhorn"} {...others} />);
}

export default Component;
