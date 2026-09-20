import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z12x-2b3l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z12x-2b3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:eraser-fill"} {...others} />);
}

export default Component;
