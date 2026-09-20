import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uijtxsb7q.css';
import '../../css/z/z97ow4bur.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uijtxsb7q"/><path class="z97ow4bur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-face-id-1"} {...others} />);
}

export default Component;
