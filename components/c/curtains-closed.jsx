import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnlxeq75i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tnlxeq75i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:curtains-closed"} {...others} />);
}

export default Component;
