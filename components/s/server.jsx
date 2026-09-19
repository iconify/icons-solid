import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztur-t_2p.css';
import '../../css/n/nqiw-hxzo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGedoEBbPO"><g class="ft5dv1b6b"><path class="ztur-t_2p"/><path class="nqiw-hxzo"/></g></mask></defs><path mask="url(#SVGedoEBbPO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:server"} {...others} />);
}

export default Component;
