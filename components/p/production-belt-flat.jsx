import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-xoz76qe.css';
import '../../css/e/evv5habqz.css';
import '../../css/q/qoqdzrk5v.css';
import '../../css/b/bbwljpc5r.css';
import '../../css/y/ye7rvgvji.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y-xoz76qe"/><path clip-rule="evenodd" class="evv5habqz"/><path class="qoqdzrk5v"/><path class="bbwljpc5r"/><path clip-rule="evenodd" class="ye7rvgvji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:production-belt-flat"} {...others} />);
}

export default Component;
