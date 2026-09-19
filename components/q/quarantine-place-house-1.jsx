import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qcuzzu3ej.css';
import '../../css/q/qgkb2kbfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qcuzzu3ej"/><path class="qgkb2kbfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:quarantine-place-house-1"} {...others} />);
}

export default Component;
