import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmi7ujp6q.css';

const viewBox = {"width":1728,"height":1792};
const content = `<path class="wmi7ujp6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:sun"} {...others} />);
}

export default Component;
