import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/c8elt-b4t.css';
import '../../css/y/yq1t-4wqr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGX2vPLd3a"><g class="aql7dnt-u"><path class="c8elt-b4t"/><path class="yq1t-4wqr"/></g></mask></defs><path mask="url(#SVGX2vPLd3a)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:circle-house"} {...others} />);
}

export default Component;
