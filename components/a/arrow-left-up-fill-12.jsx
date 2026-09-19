import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy6uo1b3k.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="yy6uo1b3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:arrow-left-up-fill-12"} {...others} />);
}

export default Component;
