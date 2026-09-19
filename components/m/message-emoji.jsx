import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/i/iku0m3-pn.css';
import '../../css/l/l3i9u4z1o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGDRwlpcAP"><g class="wwvp95byt"><path class="iku0m3-pn"/><path class="l3i9u4z1o"/></g></mask></defs><path mask="url(#SVGDRwlpcAP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:message-emoji"} {...others} />);
}

export default Component;
