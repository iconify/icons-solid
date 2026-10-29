import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yc5hd6b6e.css';
import '../../css/i/iepl1qnjh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yc5hd6b6e"/><path class="iepl1qnjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:messages"} {...others} />);
}

export default Component;
