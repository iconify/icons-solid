import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izzlobcjx.css';

const viewBox = {"width":448,"height":1024};
const content = `<path class="izzlobcjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:womanalt"} {...others} />);
}

export default Component;
