import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vdpoyrbwh.css';
import '../../css/q/qhznpibnr.css';
import '../../css/i/iru-mbbdf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGb4Tpbbh"><g class="aql7dnt-u"><path class="vdpoyrbwh"/><circle class="qhznpibnr"/><path class="iru-mbbdf"/></g></mask></defs><path mask="url(#SVGGb4Tpbbh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:address-book"} {...others} />);
}

export default Component;
