import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt6k55bjy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zt6k55bjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:snapchat"} {...others} />);
}

export default Component;
