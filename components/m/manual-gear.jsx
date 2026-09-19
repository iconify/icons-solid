import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/y67gvgx0g.css';
import '../../css/k/kga2531pz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZqFERqrk"><g class="aql7dnt-u"><path class="y67gvgx0g"/><path class="kga2531pz"/></g></mask></defs><path mask="url(#SVGZqFERqrk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:manual-gear"} {...others} />);
}

export default Component;
