import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sn57uwkqp.css';
import '../../css/i/iken03bqc.css';
import '../../css/d/dxh4m4evm.css';
import '../../css/i/ii8fx2bom.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sn57uwkqp"/><path class="iken03bqc"/><path class="dxh4m4evm"/><path class="ii8fx2bom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drill-20"} {...others} />);
}

export default Component;
