import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jp2y7_blq.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="jp2y7_blq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:subscript"} {...others} />);
}

export default Component;
