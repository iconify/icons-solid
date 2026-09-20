import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz8e6mgxq.css';
import '../../css/v/vj-egbxkh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="iz8e6mgxq"/><path class="vj-egbxkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-direction-button"} {...others} />);
}

export default Component;
