import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/x/xwsdf1-vt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGnPr2Qbgk"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="xwsdf1-vt"/></g></mask></defs><path mask="url(#SVGnPr2Qbgk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:arrow-circle-down"} {...others} />);
}

export default Component;
