import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlz87lb7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vlz87lb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:baby-changing-filled"} {...others} />);
}

export default Component;
