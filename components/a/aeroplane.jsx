import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nec4-ibtx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nec4-ibtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:aeroplane"} {...others} />);
}

export default Component;
