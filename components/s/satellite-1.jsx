import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdmt-v1nl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zdmt-v1nl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:satellite-1"} {...others} />);
}

export default Component;
