import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssv2w4v0d.css';

const viewBox = {"width":750,"height":850};
const content = `<path class="ssv2w4v0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"il:conversation"} {...others} />);
}

export default Component;
