import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yd9e0jb9j.css';

const viewBox = {"width":384,"height":448};
const content = `<path class="yd9e0jb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:moon"} {...others} />);
}

export default Component;
