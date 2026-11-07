import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edf2mabxb.css';
import '../../css/w/wqggdqb6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="edf2mabxb"/><path class="wqggdqb6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:unread-bold-duotone"} {...others} />);
}

export default Component;
