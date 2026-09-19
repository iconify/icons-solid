import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dc5kio9th.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dc5kio9th"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:linux"} {...others} />);
}

export default Component;
