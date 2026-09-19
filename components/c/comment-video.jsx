import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whoz7fbxo.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="whoz7fbxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:comment-video"} {...others} />);
}

export default Component;
