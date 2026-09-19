import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmhlnubfi.css';
import '../../css/w/whku1ubxh.css';
import '../../css/t/tyczzdbmu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPdwizdKj"><g class="ft5dv1b6b"><path class="nmhlnubfi"/><path clip-rule="evenodd" class="whku1ubxh"/><path class="tyczzdbmu"/></g></mask></defs><path mask="url(#SVGPdwizdKj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:people-minus"} {...others} />);
}

export default Component;
