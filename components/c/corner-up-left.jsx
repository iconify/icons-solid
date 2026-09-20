import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/giw43fzcx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="giw43fzcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:corner-up-left"} {...others} />);
}

export default Component;
