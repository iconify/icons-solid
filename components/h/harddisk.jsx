import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy1jyjb2i.css';

const viewBox = {"width":897,"height":1024};
const content = `<path class="oy1jyjb2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:harddisk"} {...others} />);
}

export default Component;
