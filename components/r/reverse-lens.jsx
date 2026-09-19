import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/gxtu-xick.css';
import '../../css/g/gc2rqrc4v.css';
import '../../css/v/vm1b4_bnl.css';
import '../../css/i/i9iwqjceg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGtV2exeCU"><g class="rohhhzb0l"><path class="gxtu-xick"/><path class="gc2rqrc4v"/><path class="vm1b4_bnl"/><path class="i9iwqjceg"/></g></mask></defs><path mask="url(#SVGtV2exeCU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:reverse-lens"} {...others} />);
}

export default Component;
