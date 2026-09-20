import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkn-xcc_r.css';
import '../../css/n/nod8y87lz.css';
import '../../css/v/v3xj24_6m.css';
import '../../css/m/mwmj-lbpq.css';
import '../../css/f/fnvdoxl6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gkn-xcc_r"/><path class="nod8y87lz"/><path class="v3xj24_6m"/><path class="mwmj-lbpq"/><path class="fnvdoxl6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:wordpress"} {...others} />);
}

export default Component;
