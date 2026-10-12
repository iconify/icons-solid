import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gih_8gbya.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gih_8gbya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:highlighter-filled"} {...others} />);
}

export default Component;
