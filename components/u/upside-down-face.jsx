import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/hgyipz03i.css';
import '../../css/t/to1q24v3e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNFhCWduG"><g class="v3_i3wktz"><path class="hgyipz03i"/><path class="to1q24v3e"/></g></mask></defs><path mask="url(#SVGNFhCWduG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:upside-down-face"} {...others} />);
}

export default Component;
