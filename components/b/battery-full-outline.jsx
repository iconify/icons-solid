import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/ynz9scf9p.css';
import '../../css/n/n3rgr7haw.css';
import '../../css/f/fvzgndqwy.css';
import '../../css/l/llq415oom.css';
import '../../css/l/lttb5bslb.css';
import '../../css/u/unxdowbbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ynz9scf9p"/><rect class="n3rgr7haw"/><rect class="fvzgndqwy"/><rect class="llq415oom"/><rect class="lttb5bslb"/><path class="unxdowbbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:battery-full-outline"} {...others} />);
}

export default Component;
