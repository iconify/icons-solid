import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ln7kjcc0u.css';
import '../../css/c/cd47i0m6c.css';
import '../../css/q/qoddae6qt.css';
import '../../css/d/d7doq45qw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ln7kjcc0u"/><path class="cd47i0m6c"/><path class="qoddae6qt"/><path class="d7doq45qw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-minimalistic-broken"} {...others} />);
}

export default Component;
