import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/zmqvefb4b.css';
import '../../css/f/f8pik0dtj.css';
import '../../css/n/n-4oupbpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="zmqvefb4b"/><path class="f8pik0dtj"/><path class="n-4oupbpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:star-off"} {...others} />);
}

export default Component;
