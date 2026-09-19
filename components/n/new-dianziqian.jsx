import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_sapzgjq.css';
import '../../css/v/vnc4azbcg.css';
import '../../css/s/s12queb_a.css';
import '../../css/x/x0winr6kg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGR7zwdepN"><g class="ft5dv1b6b"><path class="y_sapzgjq"/><path class="vnc4azbcg"/><path class="s12queb_a"/><path class="x0winr6kg"/></g></mask></defs><path mask="url(#SVGR7zwdepN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:new-dianziqian"} {...others} />);
}

export default Component;
