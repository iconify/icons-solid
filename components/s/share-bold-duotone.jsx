import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kpwkzx3ky.css';
import '../../css/z/zq7_lpb2o.css';
import '../../css/a/asuhr6qyo.css';
import '../../css/z/zfm2k-boo.css';
import '../../css/p/p6ok6mb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="kpwkzx3ky"/><path class="zq7_lpb2o"/></g><path class="asuhr6qyo"/><path class="zfm2k-boo"/><path class="p6ok6mb4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:share-bold-duotone"} {...others} />);
}

export default Component;
