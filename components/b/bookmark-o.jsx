import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qc0hhlbpl.css';

const viewBox = {"width":1280,"height":1536};
const content = `<path class="qc0hhlbpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:bookmark-o"} {...others} />);
}

export default Component;
