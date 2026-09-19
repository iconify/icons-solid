import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/n/n7f99bojn.css';
import '../../css/p/ptxldtbxo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGfIgoeeRz"><g class="v3_i3wktz"><path class="n7f99bojn"/><path class="ptxldtbxo"/></g></mask></defs><path mask="url(#SVGfIgoeeRz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:vip"} {...others} />);
}

export default Component;
