import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwj3j5b2h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uwj3j5b2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:smile-wink-alt"} {...others} />);
}

export default Component;
