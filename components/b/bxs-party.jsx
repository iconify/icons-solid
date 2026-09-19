import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7auwxbuh.css';
import '../../css/b/bw3v4wb3i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w7auwxbuh"/><path class="bw3v4wb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-party"} {...others} />);
}

export default Component;
