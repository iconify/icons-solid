import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjrotzbpr.css';
import '../../css/w/wgckvftty.css';
import '../../css/w/wh72mu7bx.css';
import '../../css/d/db6ijebmx.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="vjrotzbpr"/><rect class="wgckvftty"/><rect class="wh72mu7bx"/><rect class="db6ijebmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:columns-4-filled"} {...others} />);
}

export default Component;
