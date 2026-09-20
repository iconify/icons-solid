import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ijz7qebjq.css';
import '../../css/q/qubz_xvrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ijz7qebjq"/><path class="qubz_xvrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-dashed-line-duotone"} {...others} />);
}

export default Component;
