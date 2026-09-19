import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxvfs20bi.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="pxvfs20bi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:twitch-filled"} {...others} />);
}

export default Component;
