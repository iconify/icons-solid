import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jhlu70bij.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jhlu70bij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xcur"} {...others} />);
}

export default Component;
