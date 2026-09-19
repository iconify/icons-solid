import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bep--83gd.css';
import '../../css/u/uo1wgac5o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG970hQeuX"><g class="v3_i3wktz"><path class="bep--83gd"/><path class="uo1wgac5o"/></g></mask></defs><path mask="url(#SVG970hQeuX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:medical-mark"} {...others} />);
}

export default Component;
