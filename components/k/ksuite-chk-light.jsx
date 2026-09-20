import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfusopbkd.css';
import '../../css/j/jx1d2towh.css';
import '../../css/x/xj6r9dbct.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yfusopbkd"/><path class="jx1d2towh"/><path class="xj6r9dbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-chk-light"} {...others} />);
}

export default Component;
