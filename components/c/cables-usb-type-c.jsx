import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/epk0drb8m.css';
import '../../css/y/ynoqnxpwc.css';
import '../../css/i/i9g5gccvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="epk0drb8m"/><path class="ynoqnxpwc"/><path class="i9g5gccvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cables-usb-type-c"} {...others} />);
}

export default Component;
