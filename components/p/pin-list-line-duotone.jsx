import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tmz3cbcrl.css';
import '../../css/y/yfu3bb1vx.css';
import '../../css/x/xyk6mx0ds.css';
import '../../css/b/bfhdazbsl.css';
import '../../css/z/zfc5svshd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="tmz3cbcrl"/><path class="yfu3bb1vx"/><path class="xyk6mx0ds"/><path class="bfhdazbsl"/><path class="zfc5svshd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pin-list-line-duotone"} {...others} />);
}

export default Component;
