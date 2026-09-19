import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/gh28gsjwe.css';
import '../../css/f/fm_ve5bbr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjj1J1bLL"><g class="v3_i3wktz"><path class="gh28gsjwe"/><path class="fm_ve5bbr"/></g></mask></defs><path mask="url(#SVGjj1J1bLL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:parachute"} {...others} />);
}

export default Component;
