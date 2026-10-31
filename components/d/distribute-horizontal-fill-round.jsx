import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndcj8zbpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ndcj8zbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:distribute-horizontal-fill-round"} {...others} />);
}

export default Component;
