import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dohw6xbsy.css';
import '../../css/q/qyf7g7bbs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dohw6xbsy"/><path class="qyf7g7bbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-keyboard-button-direction-1"} {...others} />);
}

export default Component;
