import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdh9nsb5z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fdh9nsb5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:clipboard-fill"} {...others} />);
}

export default Component;
