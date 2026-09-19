import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p56h_bbeb.css';
import '../../css/p/p0qajccag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p56h_bbeb"/><path class="p0qajccag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-edit"} {...others} />);
}

export default Component;
