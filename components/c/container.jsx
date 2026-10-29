import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sr5qdob8u.css';
import '../../css/b/b4ti2tbtl.css';
import '../../css/n/nz05x2bxm.css';
import '../../css/s/s3yfdy-mu.css';
import '../../css/u/umoz30bnn.css';
import '../../css/q/qr51_2b9u.css';
import '../../css/u/ub8c1xbfd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sr5qdob8u wm-k"/><path class="b4ti2tbtl wm-k"/><path class="nz05x2bxm wm-k"/><path class="s3yfdy-mu wm-k"/><path class="umoz30bnn wm-shine"/><path class="qr51_2b9u wm-k"/><path class="ub8c1xbfd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:container"} {...others} />);
}

export default Component;
