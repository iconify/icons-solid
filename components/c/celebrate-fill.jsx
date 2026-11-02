import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6m7qefez.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6m7qefez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:celebrate-fill"} {...others} />);
}

export default Component;
