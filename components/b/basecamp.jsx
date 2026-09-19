import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyyw8y90x.css';

const viewBox = {"width":464,"height":448};
const content = `<path class="wyyw8y90x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:basecamp"} {...others} />);
}

export default Component;
