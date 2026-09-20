import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhuikybji.css';
import '../../css/s/s3hbfpb2y.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xhuikybji"/><path clip-rule="evenodd" class="s3hbfpb2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:chatbot-solid"} {...others} />);
}

export default Component;
