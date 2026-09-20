import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6y7mcc8q.css';
import '../../css/l/lc0gopbkm.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="l6y7mcc8q"/><path class="lc0gopbkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:chapel"} {...others} />);
}

export default Component;
