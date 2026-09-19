import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xedzjig2g.css';
import '../../css/i/iu5m6abdw.css';
import '../../css/p/ps5xdlbml.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEZ1UMcea"><g class="v3_i3wktz"><path class="xedzjig2g"/><path class="iu5m6abdw"/><path class="ps5xdlbml"/></g></mask></defs><path mask="url(#SVGEZ1UMcea)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-withdrawal"} {...others} />);
}

export default Component;
