import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/z/zfnawcc-o.css';
import '../../css/u/ug-fbvb6v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCO5X8dxi"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="zfnawcc-o"/><rect class="ug-fbvb6v"/></g></mask></defs><path mask="url(#SVGCO5X8dxi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:surprised-face-with-open-big-mouth"} {...others} />);
}

export default Component;
