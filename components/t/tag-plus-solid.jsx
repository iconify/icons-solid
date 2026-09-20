import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls8nwe1ya.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ls8nwe1ya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:tag-plus-solid"} {...others} />);
}

export default Component;
