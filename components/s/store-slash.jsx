import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-xgp5b4q.css';
import '../../css/r/r6x50u2cs.css';
import '../../css/l/li9lphqgm.css';
import '../../css/x/xpljl4lgm.css';
import '../../css/k/kj_m4hbga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-xgp5b4q"/><path class="r6x50u2cs"/><path class="li9lphqgm"/><path class="xpljl4lgm"/><path class="kj_m4hbga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:store-slash"} {...others} />);
}

export default Component;
