import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yeuuqiwtl.css';
import '../../css/o/ofq_gr2ov.css';
import '../../css/a/a_4yo5bss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yeuuqiwtl"/><path class="ofq_gr2ov"/><path class="a_4yo5bss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:usb"} {...others} />);
}

export default Component;
