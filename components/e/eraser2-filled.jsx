import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgxm9rbak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cgxm9rbak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:eraser2-filled"} {...others} />);
}

export default Component;
