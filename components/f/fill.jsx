import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/e/ep_etvpjk.css';
import '../../css/j/jm3g6_b_n.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQJh8QcrX"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><path class="ep_etvpjk"/><path class="jm3g6_b_n"/></g></mask></defs><path mask="url(#SVGQJh8QcrX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:fill"} {...others} />);
}

export default Component;
