import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8pd1cytm.css';

const viewBox = {"width":832,"height":1024};
const content = `<path class="j8pd1cytm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:ironman"} {...others} />);
}

export default Component;
