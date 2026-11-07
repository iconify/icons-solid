import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjzke8b7e.css';
import '../../css/c/cx6-9bwoj.css';
import '../../css/x/xapju6bju.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bjzke8b7e"/><path class="cx6-9bwoj"/><path class="xapju6bju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:letter-unread-bold-duotone"} {...others} />);
}

export default Component;
