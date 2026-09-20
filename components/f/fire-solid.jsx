import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6_fz7-2v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p6_fz7-2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:fire-solid"} {...others} />);
}

export default Component;
