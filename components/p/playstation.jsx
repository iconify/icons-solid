import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7yc6nbet.css';

const viewBox = {"width":464,"height":448};
const content = `<path class="f7yc6nbet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:playstation"} {...others} />);
}

export default Component;
