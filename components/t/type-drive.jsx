import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/naayrx7_t.css';
import '../../css/f/f6_qo5blf.css';
import '../../css/s/sqeegfjol.css';
import '../../css/i/iuv3v5uuu.css';
import '../../css/y/y1vpqobkt.css';
import '../../css/e/edzp0ybfv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMRLmmbkx"><g class="aql7dnt-u"><path class="naayrx7_t"/><path class="f6_qo5blf"/><path class="sqeegfjol"/><circle class="iuv3v5uuu"/><circle class="y1vpqobkt"/><path class="edzp0ybfv"/></g></mask></defs><path mask="url(#SVGMRLmmbkx)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:type-drive"} {...others} />);
}

export default Component;
