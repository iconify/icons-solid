import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qra7nnbkt.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="qra7nnbkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:rss"} {...others} />);
}

export default Component;
