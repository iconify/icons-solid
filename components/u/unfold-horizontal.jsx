import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nr94l6b4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nr94l6b4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:unfold-horizontal"} {...others} />);
}

export default Component;
