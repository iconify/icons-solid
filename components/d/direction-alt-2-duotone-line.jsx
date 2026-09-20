import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o58hkebvg.css';
import '../../css/z/z_40f6buh.css';
import '../../css/q/qpsg985fn.css';
import '../../css/r/ri0sq5aqh.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG7b5yRbxn"><g class="o58hkebvg"><path class="z_40f6buh"/><path class="qpsg985fn"/><path class="ri0sq5aqh"/></g></mask></defs><path mask="url(#SVG7b5yRbxn)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:direction-alt-2-duotone-line"} {...others} />);
}

export default Component;
