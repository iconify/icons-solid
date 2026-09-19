import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vj61-6bpt.css';
import '../../css/r/rl87tlb2e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVV02udhX"><g class="aql7dnt-u"><path class="vj61-6bpt"/><path class="rl87tlb2e"/></g></mask></defs><path mask="url(#SVGVV02udhX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:love-and-help"} {...others} />);
}

export default Component;
