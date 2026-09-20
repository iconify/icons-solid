import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i2z4fbcpe.css';
import '../../css/v/v21qiwb4s.css';
import '../../css/k/ku_qpobzi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="i2z4fbcpe"/><path class="v21qiwb4s"/><path class="ku_qpobzi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-with-files-line-duotone"} {...others} />);
}

export default Component;
