import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/sl82esoas.css';
import '../../css/c/cchyt3b-e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGV6DRCc9a"><g class="v3_i3wktz"><path class="sl82esoas"/><path class="cchyt3b-e"/></g></mask></defs><path mask="url(#SVGV6DRCc9a)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:volume-small"} {...others} />);
}

export default Component;
