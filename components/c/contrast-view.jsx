import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bg8i-6qpe.css';
import '../../css/a/a2dqemwrc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtVNFwewy"><g class="v3_i3wktz"><path class="bg8i-6qpe"/><path class="a2dqemwrc"/></g></mask></defs><path mask="url(#SVGtVNFwewy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:contrast-view"} {...others} />);
}

export default Component;
