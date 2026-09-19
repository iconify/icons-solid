import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/g/g4iz8vbbj.css';
import '../../css/x/xoigmefmm.css';
import '../../css/w/wj--2_bna.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGG6iAxo0v"><g class="v3_i3wktz"><path class="g4iz8vbbj"/><path class="xoigmefmm"/><path class="wj--2_bna"/></g></mask></defs><path mask="url(#SVGG6iAxo0v)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:land-surveying"} {...others} />);
}

export default Component;
