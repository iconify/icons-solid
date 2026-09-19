import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co3u6ra6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="co3u6ra6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:invoice-filled"} {...others} />);
}

export default Component;
