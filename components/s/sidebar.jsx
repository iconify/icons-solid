import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ousr7gb-s.css';
import '../../css/j/j4j_tvbpu.css';
import '../../css/s/sof-_6mix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ousr7gb-s"/><path class="j4j_tvbpu"/><path class="sof-_6mix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:sidebar"} {...others} />);
}

export default Component;
