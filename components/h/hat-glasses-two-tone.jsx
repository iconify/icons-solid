import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qku9p_bvt.css';
import '../../css/o/ozt8xgb3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qku9p_bvt"/><path class="ozt8xgb3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hat-glasses-two-tone"} {...others} />);
}

export default Component;
