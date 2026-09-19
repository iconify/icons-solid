import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vk79llykq.css';
import '../../css/t/tcrnivb-g.css';
import '../../css/z/zddjeg2jf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="vk79llykq"/><path class="tcrnivb-g"/><path class="zddjeg2jf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-upload-01"} {...others} />);
}

export default Component;
