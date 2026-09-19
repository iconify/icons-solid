import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9l4k9vgo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l9l4k9vgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:temperature-hot-filled"} {...others} />);
}

export default Component;
