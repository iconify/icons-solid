import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tq4pn62ou.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="tq4pn62ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:vectoralt"} {...others} />);
}

export default Component;
