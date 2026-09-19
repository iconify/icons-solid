import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/sc-c-_bdi.css';
import '../../css/o/olnotz5yy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPRmqlcpn"><g class="v3_i3wktz"><path class="sc-c-_bdi"/><path class="olnotz5yy"/></g></mask></defs><path mask="url(#SVGPRmqlcpn)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:wallet-two"} {...others} />);
}

export default Component;
