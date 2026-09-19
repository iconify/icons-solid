import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/j-v2u4nhg.css';
import '../../css/f/f6mlyysyg.css';
import '../../css/f/fsn7w5tzg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG95ueoeXe"><g class="v3_i3wktz"><path class="j-v2u4nhg"/><path class="f6mlyysyg"/><rect class="fsn7w5tzg"/></g></mask></defs><path mask="url(#SVG95ueoeXe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:astonished-face"} {...others} />);
}

export default Component;
