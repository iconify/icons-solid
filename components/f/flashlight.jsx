import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/r/rw2u32bub.css';
import '../../css/b/bbty7xbeh.css';
import '../../css/n/n-ck6kb3l.css';
import '../../css/c/cwj85ccsx.css';
import '../../css/t/tiqbonweu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="rw2u32bub"/><path class="bbty7xbeh"/><path class="n-ck6kb3l"/><path class="cwj85ccsx"/><path class="tiqbonweu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:flashlight"} {...others} />);
}

export default Component;
