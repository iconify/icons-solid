import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9p70bb8d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="i9p70bb8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:snapchat-logo-block"} {...others} />);
}

export default Component;
