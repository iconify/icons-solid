import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h67jinbbp.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="h67jinbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:missedcallalt"} {...others} />);
}

export default Component;
