import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/i/iaoomgb7e.css';
import '../../css/k/kvh9upbae.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2m4WoNWP"><g class="v3_i3wktz"><path class="iaoomgb7e"/><path class="kvh9upbae"/></g></mask></defs><path mask="url(#SVG2m4WoNWP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tag"} {...others} />);
}

export default Component;
