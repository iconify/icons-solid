import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f68_n4bcj.css';
import '../../css/m/mp7nbmbcx.css';
import '../../css/m/m17qjo6op.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f68_n4bcj"/><path class="mp7nbmbcx"/><path class="m17qjo6op"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:system-interface"} {...others} />);
}

export default Component;
