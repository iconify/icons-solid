import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdja74b3x.css';
import '../../css/t/tb44rwbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zdja74b3x"/><path class="tb44rwbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:data-transfer-edi-reload"} {...others} />);
}

export default Component;
