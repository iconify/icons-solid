import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okz8j0hfm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="okz8j0hfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-split-vertical-filled"} {...others} />);
}

export default Component;
