import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0109jbdn.css';
import '../../css/s/scn20qlnz.css';
import '../../css/z/zo89sabib.css';
import '../../css/o/oi9t13ngc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r0109jbdn"/><path class="scn20qlnz"/><path class="zo89sabib"/><path class="oi9t13ngc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:dicom-overlay"} {...others} />);
}

export default Component;
