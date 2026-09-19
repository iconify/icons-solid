import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/lgks--nrr.css';
import '../../css/b/brooorbhm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG05I3NEuo"><g class="aql7dnt-u"><path class="lgks--nrr"/><path class="brooorbhm"/></g></mask></defs><path mask="url(#SVG05I3NEuo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:feelgood-one"} {...others} />);
}

export default Component;
