import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/j1dnbmb9p.css';
import '../../css/y/ytz7pmbfo.css';
import '../../css/v/v_kcvlb3y.css';
import '../../css/u/um-pdbblm.css';
import '../../css/d/dztp3bnhy.css';
import '../../css/d/dgpn2-b8p.css';
import '../../css/p/p74s5hd3y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="j1dnbmb9p"/><path class="ytz7pmbfo"/><path class="v_kcvlb3y"/><path class="um-pdbblm"/><path class="dztp3bnhy"/><path class="dgpn2-b8p"/><path class="p74s5hd3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:world"} {...others} />);
}

export default Component;
