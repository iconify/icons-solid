import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqhpheb8j.css';

const viewBox = {"width":774,"height":1000};
const content = `<path class="tqhpheb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontelico:emo-wink2"} {...others} />);
}

export default Component;
