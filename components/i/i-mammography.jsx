import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzik92bzc.css';
import '../../css/q/qstt88dql.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="lzik92bzc"/><path class="qstt88dql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-mammography"} {...others} />);
}

export default Component;
