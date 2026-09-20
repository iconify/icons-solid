import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/k/k5y6twb8d.css';
import '../../css/s/sx3lstbif.css';
import '../../css/g/gpatv5buq.css';
import '../../css/b/brrj_bzyh.css';
import '../../css/v/vuktjebwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="k5y6twb8d"/><path class="sx3lstbif"/><path class="gpatv5buq"/><path class="brrj_bzyh"/><path class="vuktjebwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:delete-pdf"} {...others} />);
}

export default Component;
