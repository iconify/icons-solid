import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/ef37-eb_j.css';
import '../../css/q/qu42yc6im.css';
import '../../css/i/i5b9w52bx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEJ75Vbeb"><g class="wwvp95byt"><path class="ef37-eb_j"/><path class="qu42yc6im"/><path class="i5b9w52bx"/></g></mask></defs><path mask="url(#SVGEJ75Vbeb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:umbrella-two"} {...others} />);
}

export default Component;
