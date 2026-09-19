import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/l/lrd2eebhv.css';
import '../../css/g/g3df0sqil.css';
import '../../css/z/zpli_odwl.css';
import '../../css/m/mqbmq9bdb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCfAp1dvB"><g class="rohhhzb0l"><path class="lrd2eebhv"/><path class="g3df0sqil"/><path class="zpli_odwl"/><path class="mqbmq9bdb"/></g></mask></defs><path mask="url(#SVGCfAp1dvB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:baby-meal"} {...others} />);
}

export default Component;
