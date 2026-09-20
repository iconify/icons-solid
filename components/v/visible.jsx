import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/r/rx0u5xj3k.css';
import '../../css/b/be1gmsdnh.css';
import '../../css/q/qcj2453as.css';
import '../../css/e/e0hrr7bpu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="rx0u5xj3k"/><path class="be1gmsdnh"/><path class="qcj2453as"/><path class="e0hrr7bpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:visible"} {...others} />);
}

export default Component;
