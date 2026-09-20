import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myho6vbhx.css';
import '../../css/w/wjec4ccki.css';
import '../../css/e/e8l5ttbgc.css';
import '../../css/f/f4v5ozrge.css';
import '../../css/w/ww1b_qbtj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="myho6vbhx"/><path class="wjec4ccki"/><path class="e8l5ttbgc"/><path class="f4v5ozrge"/><path class="ww1b_qbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ente-auth"} {...others} />);
}

export default Component;
