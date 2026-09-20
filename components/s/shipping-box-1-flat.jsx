import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rkt6hab4n.css';
import '../../css/q/qwr-sdbpf.css';
import '../../css/b/b4q2_3qyx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="rkt6hab4n"/><path class="qwr-sdbpf"/><path clip-rule="evenodd" class="b4q2_3qyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:shipping-box-1-flat"} {...others} />);
}

export default Component;
