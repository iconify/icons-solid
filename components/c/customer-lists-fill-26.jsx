import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fs8xnjyqo.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="fs8xnjyqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:customer-lists-fill-26"} {...others} />);
}

export default Component;
