import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8lxn4b6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f8lxn4b6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:strikethrough"} {...others} />);
}

export default Component;
