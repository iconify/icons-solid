import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml5gl5ako.css';

const viewBox = {"width":1792,"height":1536};
const content = `<path class="ml5gl5ako"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:comment-o"} {...others} />);
}

export default Component;
