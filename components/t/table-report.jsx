import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/zcwckgb0f.css';
import '../../css/t/t_-82ebai.css';
import '../../css/d/drzfh_7tx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGR0pUgrTX"><g class="v3_i3wktz"><path class="zcwckgb0f"/><path class="t_-82ebai"/><path class="drzfh_7tx"/></g></mask></defs><path mask="url(#SVGR0pUgrTX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:table-report"} {...others} />);
}

export default Component;
