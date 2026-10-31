import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6ax11bjh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z6ax11bjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:folder-settings-corner-fill-round"} {...others} />);
}

export default Component;
