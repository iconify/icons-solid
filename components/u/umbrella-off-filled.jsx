import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvdzlxb9y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dvdzlxb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:umbrella-off-filled"} {...others} />);
}

export default Component;
