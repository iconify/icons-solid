import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfzc8lbfq.css';
import '../../css/s/si00v7b8i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wfzc8lbfq"/><path class="si00v7b8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:video-intelligence-api"} {...others} />);
}

export default Component;
