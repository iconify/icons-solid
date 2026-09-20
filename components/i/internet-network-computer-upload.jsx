import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkff7l4ev.css';
import '../../css/s/stwvedcof.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rkff7l4ev"/><path class="stwvedcof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:internet-network-computer-upload"} {...others} />);
}

export default Component;
