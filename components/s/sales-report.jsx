import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lmoo01bav.css';
import '../../css/b/b2y5-tb-v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGO2OHRbQe"><g class="ufeehvblu"><path class="lmoo01bav"/><path class="b2y5-tb-v"/></g></mask></defs><path mask="url(#SVGO2OHRbQe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:sales-report"} {...others} />);
}

export default Component;
