import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqkz2q7yx.css';
import '../../css/w/wyaou_efh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dqkz2q7yx"/><path class="wyaou_efh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:chatboxes"} {...others} />);
}

export default Component;
