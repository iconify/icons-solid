import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/t/tjw-xwbxp.css';
import '../../css/d/duhmw1bsi.css';
import '../../css/p/pmzo92h_v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGoAVewbPb"><g class="v3_i3wktz"><path class="tjw-xwbxp"/><rect class="duhmw1bsi"/><rect class="pmzo92h_v"/></g></mask></defs><path mask="url(#SVGoAVewbPb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:rock-gesture"} {...others} />);
}

export default Component;
