import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/woge6bu-u.css';
import '../../css/c/cjd_9-52v.css';
import '../../css/p/pnfqo0bfi.css';
import '../../css/r/rilczwbri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(-45 29.55 6.51)scale(1 -1)" class="woge6bu-u"/><path class="cjd_9-52v"/><rect transform="rotate(135 4.64 9.83)scale(-1 1)" class="pnfqo0bfi"/><path class="rilczwbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pickaxe"} {...others} />);
}

export default Component;
