import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kzw170b2l.css';

const viewBox = {"width":528,"height":448};
const content = `<path class="kzw170b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:retweet-1"} {...others} />);
}

export default Component;
