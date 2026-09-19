import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/m-w6wgbel.css';
import '../../css/n/nw__d7bfz.css';
import '../../css/l/l2x9dv0pz.css';
import '../../css/p/p-zuy-bhv.css';
import '../../css/i/ib55f4h-l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQRNJheTT"><g class="rohhhzb0l"><path class="m-w6wgbel"/><circle class="nw__d7bfz"/><path class="l2x9dv0pz"/><path class="p-zuy-bhv"/><path class="ib55f4h-l"/></g></mask></defs><path mask="url(#SVGQRNJheTT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:baby-mobile"} {...others} />);
}

export default Component;
