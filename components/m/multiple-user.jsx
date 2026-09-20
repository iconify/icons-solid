import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aiek2ibjp.css';
import '../../css/t/tml6j6bpx.css';
import '../../css/c/ctqpb75vu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aiek2ibjp"/><path class="tml6j6bpx"/><path class="ctqpb75vu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:multiple-user"} {...others} />);
}

export default Component;
