import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/e/eavf2p1cc.css';
import '../../css/f/frmswmbkl.css';
import '../../css/g/gxo4p3b3m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpV6eZbzO"><g class="gopnm44um"><path class="eavf2p1cc"/><path class="frmswmbkl"/><path class="gxo4p3b3m"/></g></mask></defs><path mask="url(#SVGpV6eZbzO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:communication"} {...others} />);
}

export default Component;
