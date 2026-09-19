import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oyd16ttwk.css';
import '../../css/q/qejtpchlt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oyd16ttwk"/><path class="qejtpchlt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:fingerprint-xmark-circle"} {...others} />);
}

export default Component;
