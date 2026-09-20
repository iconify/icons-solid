import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bztwfrbon.css';
import '../../css/p/pb328ubdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bztwfrbon"/><path class="pb328ubdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:fire"} {...others} />);
}

export default Component;
