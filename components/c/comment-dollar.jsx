import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1kzdpb4n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n1kzdpb4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:comment-dollar"} {...others} />);
}

export default Component;
