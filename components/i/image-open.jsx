import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ens04999i.css';
import '../../css/n/n_xfstkmc.css';
import '../../css/h/h03pgbcln.css';
import '../../css/m/mntmc0b2z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ens04999i"/><path class="n_xfstkmc"/><path class="h03pgbcln"/><path class="mntmc0b2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-open"} {...others} />);
}

export default Component;
