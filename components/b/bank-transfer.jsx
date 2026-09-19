import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/j/ja6m_0bgn.css';
import '../../css/r/r0scfsbyv.css';
import '../../css/s/s3emfib-q.css';
import '../../css/d/drqq1676y.css';
import '../../css/z/zct9kubqg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="ja6m_0bgn"/><path class="r0scfsbyv"/><path class="s3emfib-q"/><path class="drqq1676y"/><path class="zct9kubqg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bank-transfer"} {...others} />);
}

export default Component;
