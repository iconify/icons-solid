import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3x7q5b1j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="p3x7q5b1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:hide-sidebar"} {...others} />);
}

export default Component;
