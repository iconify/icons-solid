import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqd8dx1br.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yqd8dx1br"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:history-solid"} {...others} />);
}

export default Component;
