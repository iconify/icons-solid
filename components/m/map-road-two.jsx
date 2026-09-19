import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xlafjzblc.css';
import '../../css/l/la4yfnb1x.css';
import '../../css/x/x5yso2bum.css';
import '../../css/f/f7tie9box.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGF7oT1cvi"><g class="wwvp95byt"><path class="xlafjzblc"/><path class="la4yfnb1x"/><path class="x5yso2bum"/><path class="f7tie9box"/></g></mask></defs><path mask="url(#SVGF7oT1cvi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:map-road-two"} {...others} />);
}

export default Component;
