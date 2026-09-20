import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yboxb49-l.css';
import '../../css/p/pbutksb1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yboxb49-l"/><path class="pbutksb1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:snapchat-square"} {...others} />);
}

export default Component;
