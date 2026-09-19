import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlr4l2bie.css';

const viewBox = {"width":1152,"height":1792};
const content = `<path class="vlr4l2bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:neuter"} {...others} />);
}

export default Component;
