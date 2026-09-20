import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i3_8h7bqu.css';
import '../../css/h/h1yxmgitg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i3_8h7bqu"/><path class="h1yxmgitg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:camera-1-filled"} {...others} />);
}

export default Component;
