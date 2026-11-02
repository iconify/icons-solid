import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-v7ou0hx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-v7ou0hx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:file-heart-line"} {...others} />);
}

export default Component;
