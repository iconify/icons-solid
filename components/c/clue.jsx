import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/scm5a4buk.css';
import '../../css/y/yduyyjumo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAj7U8cvG"><g class="v3_i3wktz"><path class="scm5a4buk"/><path class="yduyyjumo"/></g></mask></defs><path mask="url(#SVGAj7U8cvG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:clue"} {...others} />);
}

export default Component;
