import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnwahsb9k.css';

const viewBox = {"width":1026,"height":1027};
const content = `<path class="vnwahsb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:pigpenx"} {...others} />);
}

export default Component;
