import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yez-whi-k.css';
import '../../css/j/jv0enia0k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjNNF8KOa"><g class="aql7dnt-u"><path class="yez-whi-k"/><path class="jv0enia0k"/></g></mask></defs><path mask="url(#SVGjNNF8KOa)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:nine-points-connected"} {...others} />);
}

export default Component;
