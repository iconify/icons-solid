import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/as6u8f6hn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="as6u8f6hn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:puzzle"} {...others} />);
}

export default Component;
