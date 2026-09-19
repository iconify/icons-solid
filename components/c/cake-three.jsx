import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qpg_yyq6d.css';
import '../../css/w/wlal9ib-s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOsfktXoZ"><g class="aql7dnt-u"><path class="qpg_yyq6d"/><path class="wlal9ib-s"/></g></mask></defs><path mask="url(#SVGOsfktXoZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cake-three"} {...others} />);
}

export default Component;
