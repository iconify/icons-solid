import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohbuwb6x.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="rohbuwb6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:bookmarkalt"} {...others} />);
}

export default Component;
