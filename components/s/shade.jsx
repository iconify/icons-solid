import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/ond75zu1p.css';
import '../../css/g/gvnlxzqyt.css';
import '../../css/q/qp833-mnc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPcgNPcyR"><g class="aql7dnt-u"><path class="ond75zu1p"/><path class="gvnlxzqyt"/><path class="qp833-mnc"/></g></mask></defs><path mask="url(#SVGPcgNPcyR)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shade"} {...others} />);
}

export default Component;
