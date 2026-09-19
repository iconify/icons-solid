import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/nakq96r0e.css';
import '../../css/b/by6efw6xw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGH7E6acBD"><g class="v3_i3wktz"><path class="nakq96r0e"/><path class="by6efw6xw"/></g></mask></defs><path mask="url(#SVGH7E6acBD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:commodity"} {...others} />);
}

export default Component;
