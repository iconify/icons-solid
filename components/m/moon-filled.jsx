import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lodm-2b5w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lodm-2b5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:moon-filled"} {...others} />);
}

export default Component;
