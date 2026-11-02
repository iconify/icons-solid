import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq5lvnzqh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cq5lvnzqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:align-vertical-distribute-end-line"} {...others} />);
}

export default Component;
