import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/e/e6ts76b5x.css';
import '../../css/t/tzb2l-bbx.css';
import '../../css/x/xymegkb3m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2XVrbdSD"><g class="rohhhzb0l"><path class="e6ts76b5x"/><path class="tzb2l-bbx"/><circle transform="rotate(25 12.083 36.688)" class="xymegkb3m"/></g></mask></defs><path mask="url(#SVG2XVrbdSD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:google-ads"} {...others} />);
}

export default Component;
