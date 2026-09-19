import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/jek41iqha.css';
import '../../css/g/gq8g9_bnj.css';
import '../../css/w/wsl0tzbfj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8ZvKHqxC"><g class="v3_i3wktz"><circle class="jek41iqha"/><path class="gq8g9_bnj"/><path class="wsl0tzbfj"/></g></mask></defs><path mask="url(#SVG8ZvKHqxC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:classroom"} {...others} />);
}

export default Component;
