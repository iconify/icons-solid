import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/erjnscacl.css';
import '../../css/j/j7imytb5r.css';
import '../../css/g/gcojdnb2q.css';
import '../../css/s/sx6qalb5x.css';
import '../../css/a/at7hgsbae.css';
import '../../css/n/n-c4xybjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="erjnscacl"/><circle class="j7imytb5r"/><path class="gcojdnb2q"/><circle class="sx6qalb5x"/><circle class="at7hgsbae"/><path class="n-c4xybjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:git-branch-x"} {...others} />);
}

export default Component;
