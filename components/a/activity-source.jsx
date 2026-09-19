import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/o/ou7brervx.css';
import '../../css/b/b5i64r8ek.css';
import '../../css/q/qrsy89s9w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="ou7brervx"/><path class="b5i64r8ek"/><path class="qrsy89s9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:activity-source"} {...others} />);
}

export default Component;
