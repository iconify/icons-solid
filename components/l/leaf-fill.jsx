import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frlgpc51z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="frlgpc51z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:leaf-fill"} {...others} />);
}

export default Component;
