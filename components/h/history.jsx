import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0tfvsbut.css';
import '../../css/q/qc7bzg-vt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m0tfvsbut"/><path class="qc7bzg-vt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:history"} {...others} />);
}

export default Component;
