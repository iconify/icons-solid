import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgj48d40s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bgj48d40s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:deezer-logo-block"} {...others} />);
}

export default Component;
