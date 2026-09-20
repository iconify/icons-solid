import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2p9e0byd.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="f2p9e0byd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:camping-tent-solid"} {...others} />);
}

export default Component;
