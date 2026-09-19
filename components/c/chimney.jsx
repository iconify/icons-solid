import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/mn8w30d0i.css';
import '../../css/r/r1fbgpb9t.css';
import '../../css/h/h8ey_rjec.css';
import '../../css/z/zi7nydz_s.css';
import '../../css/r/rcdnxiqxf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1Epe300s"><g class="rohhhzb0l"><path class="mn8w30d0i"/><path class="r1fbgpb9t"/><path class="h8ey_rjec"/><path class="zi7nydz_s"/><path class="rcdnxiqxf"/></g></mask></defs><path mask="url(#SVG1Epe300s)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:chimney"} {...others} />);
}

export default Component;
