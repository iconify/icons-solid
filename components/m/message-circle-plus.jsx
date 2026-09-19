import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykj3jqd3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ykj3jqd3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-circle-plus"} {...others} />);
}

export default Component;
