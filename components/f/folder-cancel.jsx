import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1cg0o4-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w1cg0o4-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:folder-cancel"} {...others} />);
}

export default Component;
