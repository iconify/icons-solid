import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/ll720cc5b.css';
import '../../css/x/x78giw_pp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGogKucdpE"><g class="aql7dnt-u"><rect class="ll720cc5b"/><path class="x78giw_pp"/></g></mask></defs><path mask="url(#SVGogKucdpE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:data-sheet"} {...others} />);
}

export default Component;
