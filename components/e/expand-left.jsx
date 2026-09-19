import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/b/blna7_bzy.css';
import '../../css/p/pqhat2p9w.css';
import '../../css/m/m0k56ib_g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGn8eDybEM"><g class="ufeehvblu"><path class="blna7_bzy"/><path class="pqhat2p9w"/><path class="m0k56ib_g"/></g></mask></defs><path mask="url(#SVGn8eDybEM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:expand-left"} {...others} />);
}

export default Component;
