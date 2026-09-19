import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/w/w1-p0tbrq.css';
import '../../css/e/e1ncvtq3p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOmD20bfv"><g class="wwvp95byt"><path class="w1-p0tbrq"/><path class="e1ncvtq3p"/></g></mask></defs><path mask="url(#SVGOmD20bfv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:dvi"} {...others} />);
}

export default Component;
