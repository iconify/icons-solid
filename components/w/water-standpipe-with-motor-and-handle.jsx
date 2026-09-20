import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssfczzjcq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ssfczzjcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:water-standpipe-with-motor-and-handle"} {...others} />);
}

export default Component;
