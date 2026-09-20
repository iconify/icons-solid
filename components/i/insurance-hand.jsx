import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kh_o9fisc.css';
import '../../css/k/k8imupb7i.css';
import '../../css/b/bkr8cgb8a.css';
import '../../css/q/qds4ccb9w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="kh_o9fisc"/><path class="k8imupb7i"/><path class="bkr8cgb8a"/><path class="qds4ccb9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:insurance-hand"} {...others} />);
}

export default Component;
