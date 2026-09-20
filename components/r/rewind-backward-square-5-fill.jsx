import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgj-9x8dp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cgj-9x8dp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rewind-backward-square-5-fill"} {...others} />);
}

export default Component;
