import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/w/wz99rl-4z.css';
import '../../css/r/rlyoxbbqo.css';
import '../../css/m/mgg7kg_vl.css';
import '../../css/e/enydk0bnc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGAKOwxd9C"><g class="v3_i3wktz"><rect class="wz99rl-4z"/><rect class="rlyoxbbqo"/><path class="mgg7kg_vl"/><path class="enydk0bnc"/></g></mask></defs><path mask="url(#SVGAKOwxd9C)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:telescope"} {...others} />);
}

export default Component;
